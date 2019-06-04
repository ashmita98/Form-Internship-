const express = require('express');
const router = express.Router();

const details = require('../models/details');

router.route('/add').post(function (req, res) {
    const detailsItem = new details(req.body);
    console.log(detailsItem)
    // res.send(req.body)
    detailsItem.save()
      .then(item => {
      res.status(200).json({item});
      })
      .catch(err => {
      res.status(400).send("unable to save the details into database");
      });
  });

module.exports = router;
