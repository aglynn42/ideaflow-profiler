import { Injectable } from '@angular/core';
import { Headers, Http, BaseRequestOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { FaqSummary } from '../../models/faqSummary';


@Injectable()
export class FaqService {
  private apiUrl = 'http://om-ideaflow.herokuapp.com/';

  constructor(private http: Http ){

  }

  getFaqs (): Observable<FaqSummary[]> {
    let headers = new Headers({ 'X-API-Key': '2fe730cb-7b7b-4cf6-8228-0698c457cda8' });
    let options = new RequestOptions({headers: headers});

    return this.http
      .get(this.apiUrl + 'storyweb/faq', options)
      .map( response => <FaqSummary[]>response.json().contents );
  }


}
