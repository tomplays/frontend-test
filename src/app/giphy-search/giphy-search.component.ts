import { Component, OnInit } from '@angular/core';
import { GiphyApiService } from '../services/giphy-api.service';


@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.sass']
})
export class GiphySearchComponent implements OnInit {

  query:string;
  constructor(private giphyApiService: GiphyApiService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    this.giphyApiService.query(this.query,1);
  }

}
