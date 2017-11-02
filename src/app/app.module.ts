import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchYelpComponent } from './search-yelp/search-yelp.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchYelpComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
