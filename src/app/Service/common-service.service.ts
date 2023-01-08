import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = 'http://localhost:9000/' 

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post(this.url + "register", data);
  }

  loginUsers(data: any) {
    return this.http.post(this.url + "login",data);
  }
}
