import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(private http: HttpClient) { }

  getUserInformation() {
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
