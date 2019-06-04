import { Component } from '@angular/core';
import {Forms} from '../forms';
import { NgForm } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrls: ['./eform.component.css']
})
export class EformComponent {
      gender = ['Male', 'Female'];
      model = new Forms('', '', '', 0, this.gender[0]);
      onSubmit(eform: NgForm) {
        axios.post('http://localhost:3000/details/add', eform.value).then(res => {
          console.log(res);
        });
        console.log(eform.value);
        eform.reset();
      }
}
