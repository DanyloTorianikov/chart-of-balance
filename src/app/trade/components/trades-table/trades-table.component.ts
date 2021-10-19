import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingEditingTradesComponent } from '../adding-editing-trades/adding-editing-trades.component';
import { MatTable } from '@angular/material/table';
import { Trade } from '../../model/trade';

@Component({
  selector: 'app-trades-table',
  templateUrl: './trades-table.component.html',
  styleUrls: ['./trades-table.component.scss'],
})
export class TradesTableComponent implements OnInit {

  @ViewChild(MatTable) private table: MatTable<Trade>;

  public displayedColumns: string[] = [
    'entryPrice',
    'exitPrice',
    'entryDate',
    'exitDate',
    'profit',
    'balance',
    'edit'
  ];
  public userTrades: Trade[] = [];
  public lineXChartsBalance: number[];
  public lineYChartsExitDate: string[];

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void { }

  public openAddingEditingDialog(oldTrade?: Trade): void {

    const id = oldTrade ? oldTrade.id : this.userTrades.length;
    const dialogRef = this.dialog.open(AddingEditingTradesComponent, {
      width: '600px',
      data: { trade: oldTrade, id },
    });
    dialogRef.afterClosed().subscribe((newTrade: Trade) => {
      if (!newTrade) {
        return;
      }

      if (oldTrade) {
        this.userTrades[newTrade.id] = newTrade;
      } else {
        this.userTrades.push(newTrade);
      }
      this.userTrades.sort((a, b) => a.exitDate > b.exitDate ? 1 : -1);
      this.userTrades.forEach((trade: Trade, index: number) => trade.balance = trade.profit + (this.userTrades[index - 1]?.balance || 0));
      this.lineXChartsBalance = this.userTrades.map(trade => trade?.balance);
      this.lineYChartsExitDate = this.userTrades.map(trade => trade?.exitDate);
      this.table?.renderRows();
    });
  }
}
