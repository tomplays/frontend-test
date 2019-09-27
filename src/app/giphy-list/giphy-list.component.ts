import { Component, OnInit, OnDestroy } from '@angular/core';

import { GiphyApiService } from '../services/giphy-api.service';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.sass']
})

export class GiphyListComponent implements OnInit, OnDestroy {

  giphyResults: any[];
  subscription;

  constructor(private giphyApiService: GiphyApiService) { }

  ngOnInit() {

    // initial (default?) query to test http service

    this.giphyApiService.query('code')

    this.subscription =  this.giphyApiService.queryCallback.subscribe(() => {
        this.giphyResults = this.giphyApiService.giphyResults.data
        console.log( this.giphyResults)
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
