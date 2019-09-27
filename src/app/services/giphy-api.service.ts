import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { GIPHY_API_KEY, GIPHY_SEARCH_ENDPOINT } from '../giphy-constants';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {
  giphyResults: any;
  queryCallback = new Subject<any>();
  constructor(private http: HttpClient) { }

  // Search giphy and update to observers
  query(query) {
    //this.query = query;
    const API_URL = `${GIPHY_SEARCH_ENDPOINT}?api_key=${GIPHY_API_KEY}&q=${query}`;
    this.http.get(API_URL).subscribe(res => {
      this.giphyResults = res;
      this.queryCallback.next(res);
    });
  }



}
