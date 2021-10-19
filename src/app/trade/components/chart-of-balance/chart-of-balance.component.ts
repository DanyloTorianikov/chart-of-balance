import { Component, Input } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CHART_COLORS, CHART_LEGEND, CHART_OPTIONS, CHART_TYPE } from './chars-options';

@Component({
  selector: 'app-chart-of-balance',
  templateUrl: './chart-of-balance.component.html',
  styleUrls: ['./chart-of-balance.component.scss']
})
export class ChartOfBalanceComponent {

  @Input() public lineXChartsBalance: number[];
  @Input() public lineYChartsExitDate: string[];
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Chart Of Balance' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = CHART_OPTIONS;
  public lineChartColors: Color[] = CHART_COLORS;
  public lineChartLegend: boolean = CHART_LEGEND;
  public lineChartType: ChartType = CHART_TYPE;

  constructor() { }

  public ngOnChanges() {
    this.lineChartData = [
      { data: this.lineXChartsBalance, label: 'Chart Of Balance' },
    ];
    this.lineChartLabels = this.lineYChartsExitDate.map(date => new Date(date).toDateString());
  }

}
