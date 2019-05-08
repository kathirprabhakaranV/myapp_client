import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  baseURL = 'localhost:2000/api/';

  constructor(private http: HttpClient) { }

  saveFile(data: any): any {
    let Url = this.baseURL + 'news/fileUpload';
	  return this.http.post(Url, data);
  }

  // saveFile(data: any): any {
  //   let Url = this.baseURL + 'news/fileUpload';
  //   return this.http.post(Url, data)
  //     .catch(this.errorHandler);
  // }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Server Error");
  // }
}
