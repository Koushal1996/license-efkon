import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 // url: string = 'http://localhost:8080';
  // url: string = 'http://enforcement.us-east-2.elasticbeanstalk.com:8080';
   url: string = ' http://efkon-licence-key.us-east-2.elasticbeanstalk.com:8080';
  
   constructor(public http: HttpClient) {
  }

  private getAccessToken() {

    const basicToken = 'efkon-atcs:nxtlife';

    return !localStorage.getItem('access_token') ? 'Basic ' + btoa(basicToken) : 'Bearer ' + localStorage.getItem('access_token');
  }

  private addHeaders(optionalHeaders?: HttpHeaders) {

    let requestHeaders = new HttpHeaders()
      .set('Authorization', this.getAccessToken());

    if (optionalHeaders) {
      for (const header of optionalHeaders.keys()) {
        requestHeaders = requestHeaders.append(header, optionalHeaders.get(header));
      }
    }
    return requestHeaders;
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    // if (!reqOpts) {
    //   reqOpts = {
    //     params: new HttpParams()
    //   };
    // }

    // Support easy query params for GET requests
    // if (params) {
    //   reqOpts.params = new HttpParams();
    //   for (let k in params) {
    //     reqOpts.params = reqOpts.params.set(k, params[k]);
    //   }
    // }
    const headers = this.addHeaders(reqOpts);
    return this.http.get(this.url + '/' + endpoint, { headers: headers, observe: 'response' })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    const headers = this.addHeaders(reqOpts);
    return this.http.post(this.url + '/' + endpoint, body, { headers: headers, observe: 'response' })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    const headers = this.addHeaders(reqOpts);
    return this.http.put(this.url + '/' + endpoint, body, { headers: headers, observe: 'response' })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  delete(endpoint: string, reqOpts?: any) {
    const headers = this.addHeaders(reqOpts);
    return this.http.delete(this.url + '/' + endpoint, { headers: headers, observe: 'response' })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts)
  }

  extractData = (response: HttpResponse<any>) => {
    // if (response.status === 204) {
    //   this.showError("Data Not Found");
    // }
    return response.body || response.status;
  };

  handleError = (errorResponse: HttpErrorResponse) => {
    // debugger;
    if (errorResponse.status)
      this.showError(errorResponse.error.message || "Something went wrong");
    return throwError(errorResponse);
  };

  async showError(message) {
    alert(message)
  }
}
