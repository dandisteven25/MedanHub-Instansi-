import { Injectable, NgZone } from '@angular/core';
// import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(instansi => {
      if (instansi) {
        this.userData = instansi;
        console.log(this.userData);
        localStorage.setItem('instansi', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('instansi'));
      } else {
        localStorage.setItem('instansi', null);
        JSON.parse(localStorage.getItem('instansi'));
      }
    });
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  registerUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  checkAuthState(){
    return this.ngFireAuth.authState
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const instansi = JSON.parse(localStorage.getItem('instansi'));
    return (instansi !== null) ? true : false;
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('instansi');
      this.router.navigate(['/login']);
    });
  }
}
