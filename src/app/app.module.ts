import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Custom service
import { GiphyApiService } from './services/giphy-api.service';

// Custom components
import { AppComponent } from './app.component';
import { GiphyListComponent } from './giphy-list/giphy-list.component';
import { GiphyListItemComponent } from './giphy-list-item/giphy-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphyListComponent,
    GiphyListItemComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GiphyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
