import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  //heroku
  readonly URL_REGISTER = '/api/register';
  readonly URL_AUTH = '/api/authenticate';
  readonly URL_PROFILE = '/api/userProfile';

  //local
  // readonly URL_REGISTER = 'http://localhost:3200/api/register';
  // readonly URL_AUTH = 'http://localhost:3200/api/authenticate';
  // readonly URL_PROFILE = 'http://localhost:3200/api/userProfile';

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(this.URL_REGISTER,user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(this.URL_AUTH, authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(this.URL_PROFILE);
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
