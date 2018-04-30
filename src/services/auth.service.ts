import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {

  private user: firebase.User;

  constructor(public angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credentials) {
    console.log("Sign in with Email");
    return this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUp(credentials) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }
}
