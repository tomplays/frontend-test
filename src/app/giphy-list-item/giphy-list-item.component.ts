import { Component, OnInit, Input } from '@angular/core';
import { GiphyApiService } from '../services/giphy-api.service';

@Component({
  selector: 'app-giphy-list-item',
  templateUrl: './giphy-list-item.component.html',
  styleUrls: ['./giphy-list-item.component.sass']
})
export class GiphyListItemComponent implements OnInit {

  @Input() gif: {id: string, title:string};

  constructor(private giphyApiService: GiphyApiService) { }
  ngOnInit() {}

}
