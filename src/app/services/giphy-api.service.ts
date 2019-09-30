import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { GIPHY_API_KEY, GIPHY_SEARCH_ENDPOINT, GIPHY_SEARCH_LIMIT } from '../giphy-constants';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

constructor(private http: HttpClient) { }
  queryCallback = new Subject<any>();
  giphyResults: any;
  searchTerm : string;

  // Search giphy and update to observers
  query(query,page) {
    const offset = (page - 1) * GIPHY_SEARCH_LIMIT;
    console.log("query on page:"+page+' offest='+offset)
    const API_URL = `${GIPHY_SEARCH_ENDPOINT}?api_key=${GIPHY_API_KEY}&q=${query}&limit=9&offset=${offset}`;
    this.http.get(API_URL).subscribe(res => {
      this.giphyResults = res;
      this.searchTerm = query;
      this.queryCallback.next(res);
    });
  }
}
