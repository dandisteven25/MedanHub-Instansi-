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
    this.ngFireAuth.authState.subscribe(layanan_publik => {
      if (layanan_publik) {
        this.userData = layanan_publik;
        console.log(this.userData);
        localStorage.setItem('layanan_publik', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('layanan_publik'));
      } else {
        localStorage.setItem('layanan_publik', null);
        JSON.parse(localStorage.getItem('layanan_publik'));
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
    const layanan_publik = JSON.parse(localStorage.getItem('layanan_publik'));
    return (layanan_publik !== null) ? true : false;
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('layanan_publik');
      this.router.navigate(['/login']);
    });
  }
}
