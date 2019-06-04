const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Details
var details = new Schema({
  firstname: String,
  lastname: String,
  email:  String,
  phone:  Number,
  gender:  String

});

module.exports = mongoose.model('details', details);
