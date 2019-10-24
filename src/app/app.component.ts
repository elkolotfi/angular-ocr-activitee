import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCYZ6Qf2xeBPMWN9CC7FvA4qj55SqWLqsc',
      authDomain: 'ocr-angular-activity.firebaseapp.com',
      databaseURL: 'https://ocr-angular-activity.firebaseio.com',
      projectId: 'ocr-angular-activity',
      storageBucket: 'ocr-angular-activity.appspot.com',
      messagingSenderId: '400003732399',
      appId: '1:400003732399:web:0582d45cb43e33a70a155a'
    };

    firebase.initializeApp(firebaseConfig)
  }
}
