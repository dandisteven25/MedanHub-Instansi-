import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DatabaseService } from './services/database.service';

var firebaseConfig = {
  apiKey: "AIzaSyAqBdVf2NAlmHxoifm-VSPqi9QfP3Nqc4g",
  authDomain: "medanhub-96de0.firebaseapp.com",
  databaseURL: "https://medanhub-96de0-default-rtdb.firebaseio.com",
  projectId: "medanhub-96de0",
  storageBucket: "medanhub-96de0.appspot.com",
  messagingSenderId: "1068361137842",
  appId: "1:1068361137842:web:1582dcae2c03b9133b13ab",
  measurementId: "G-PQBBXY896H"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [Camera, DatabaseService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
