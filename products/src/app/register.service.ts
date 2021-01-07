import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError}from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http :HttpClient) {}

register(item) //signup return function//
  {
    return this.http.post("http://localhost:3000/signup",{"person":item})
    .subscribe(data => {console.log(data)})
  }
register1(item) //login return function//
{
  return this.http.post("http://localhost:3000/login",{"person":item})
  // .subscribe(data => {console.log(data)})
  .pipe(catchError(this.errorHandler))
}

errorHandler(error:HttpErrorResponse) //error function to show unauthorized for wrong credentials//
{
  return throwError(error)
}
}
