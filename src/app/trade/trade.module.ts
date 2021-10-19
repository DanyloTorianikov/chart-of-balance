import { NgModule } from '@angular/core';
import { TradesTableComponent } from './components/trades-table/trades-table.component';
import { ChartOfBalanceComponent } from './components/chart-of-balance/chart-of-balance.component';
import { AddingEditingTradesComponent } from './components/adding-editing-trades/adding-editing-trades.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material-module';

@NgModule({
    declarations: [
        TradesTableComponent,
        ChartOfBalanceComponent,
        AddingEditingTradesComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ChartsModule,
        MaterialModule
    ],
    exports: [
        TradesTableComponent,
        ChartOfBalanceComponent,
        AddingEditingTradesComponent,
    ]
})
export class TradeModule { }

