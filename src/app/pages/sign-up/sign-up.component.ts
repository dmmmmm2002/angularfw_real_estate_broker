import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
    confPassword : new FormControl(''),
    name : new FormGroup({
      forename : new FormControl(''),
      surname : new FormControl(''),
    })
  });

  constructor(private location: Location) { }

  onSubmit() {

  }

  goBack() {
    this.location.back();
  }

}
