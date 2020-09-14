import { Injectable } from '@angular/core';
import { Usr } from './usr';
import { Observable } from 'rxjs';
import { _throw as throwError } from 'rxjs/observable/throw';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';


@Injectable()
export class FileUploadService {

  baseURL = "http://localhost:8080/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
    // Get Users
    getUsrs() {
      return this.http.get(this.baseURL)
    }

    // Create User
  addUsr(name: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("avatar", profileImage);

    return this.http.post<Usr>(`${this.baseURL}/create-user`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

   // Error handling
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
