import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Lista1Service {
  

  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient){ }

  getUsers(){
    return this.http.get<any[]>(`${this.usersUrl}`)
  }
  
  getPhotos(){
    return this.http.get<any[]>(`${this.photosUrl}`)
  }
}
