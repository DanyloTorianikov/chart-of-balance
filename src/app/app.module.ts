import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TradeModule } from './trade/trade.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TradeModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    TradeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
