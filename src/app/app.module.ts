import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, SearchComponent, SearchResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
