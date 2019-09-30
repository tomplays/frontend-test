import { Component, OnInit, OnDestroy } from '@angular/core';

import { GiphyApiService } from '../services/giphy-api.service';

import { GIPHY_SEARCH_LIMIT } from '../giphy-constants';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.sass']
})

export class GiphyListComponent implements OnInit {

  giphyResults: any[];
  resultCount;
  page;
  subscription;
  searchTerm;
  offset;

  constructor(private giphyApiService: GiphyApiService) { }

  ngOnInit() {
    this.page = 1;
    this.subscription =  this.giphyApiService.queryCallback.subscribe(() => {
      this.giphyResults = this.giphyApiService.giphyResults.data
      this.resultCount = this.giphyApiService.giphyResults.pagination.total_count
      this.offset = this.giphyApiService.giphyResults.pagination.offset;
      this.page = this.offset === 0 ? 1 : ((this.offset + GIPHY_SEARCH_LIMIT) / GIPHY_SEARCH_LIMIT);
      this.searchTerm = this.giphyApiService.searchTerm
    });
  }
  onPageChange(page: number) {
    this.giphyApiService.query(this.searchTerm, page);
    // fix scroll back to top after pageChange
    window.scrollTo(0, 0);
  }
}
