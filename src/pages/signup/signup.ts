import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupError: string;
  form: FormGroup;


  constructor(public navCtrl: NavController, formBuilder: FormBuilder,  private auth: AuthService) {
    this.form = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }


  signup() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };

    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.signupError = error.message
    );
  }


}
