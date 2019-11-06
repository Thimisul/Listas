import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    const config = {
      apiKey: "AIzaSyDRIr941uGbcwzPCyoOXKb7O-tDJRr9nUg",
      authDomain: "listas-b1cbf.firebaseapp.com",
      databaseURL: "https://listas-b1cbf.firebaseio.com",
      projectId: "listas-b1cbf",
      storageBucket: "listas-b1cbf.appspot.com",
      messagingSenderId: "736978479731",
      appId: "1:736978479731:web:7cb9e86ab2678f1ed9d806",
      measurementId: "G-630YGG323Y"
    };
  // Initialize Firebase
    firebase.initializeApp(config);
  }

  db(){
    return firebase.firestore();
  }

  auth(){
    return firebase.auth();
  }

}

