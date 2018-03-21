import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../../config/firebase.config';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: []
})
export class FirebaseModule { }
