import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

// Custom service
import { GiphyApiService } from './services/giphy-api.service';

// Custom components
import { AppComponent } from './app.component';
import { GiphyListComponent } from './giphy-list/giphy-list.component';
import { GiphyListItemComponent } from './giphy-list-item/giphy-list-item.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphyListComponent,
    GiphyListItemComponent,
    GiphySearchComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [GiphyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
