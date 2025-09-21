import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ChartOptions, ChartType as chartjstype } from 'chart.js';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ChartType, ApexStroke, ApexLegend } from 'ng-apexcharts';
import {
  Chart,
  ChartType as chartjstype,
  ChartOptions,
  DoughnutController,
  ArcElement,
  Tooltip,Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { OrderListComponent } from '../order-list/order-list.component';




// ✅ Register controllers & plugins ONCE before using any chart
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule, BaseChartDirective, OrderListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
    @Input() selectedtab='Default';
    currentTheme = 'light';
    @Output() themechanges: EventEmitter<string> = new EventEmitter<string>();


  
  cardsData = [{header: 'Customer', value: '3,781',change: '11.01%', icon: 'bi bi-arrow-up-right', color: 'var(--blue)', class:'me-3 mb-3'},{header: 'Orders', value: '1.219',change: '-0.03%', icon: 'bi bi-arrow-down-left', color: 'var(--lightBlue)', class: 'ms-3 mb-3'},{header: 'Revenue', value: '$695',change: '15.01%', icon: 'bi bi-arrow-up-right', color: 'var(--lightPurple)' , class: 'mt-3 me-3'},{header: 'Growth', value: '30.01%',change: '+6.08%', icon: 'bi bi-arrow-up-right', color: 'var(--purple)', class: 'mt-3 ms-3'},];
  tableData = [{name: 'ASOS Ridlry High Waist', price: '$79.49', quantity: '82', amount: '$6,518.18'},{name: 'Marco Lightweight Shirt', price: '$128.50', quantity: '37', amount: '$4,754.50'}, {name: 'Half Sleve Shirt', price: '$39.99', quantity: '64', amount: '$2,559.36'}, {name: 'Lightweight Jacket', price: '$20.00', quantity: '184', amount: '$3680.00'}, {name: 'Macro Shoes', price: '$79.49', quantity: '64', amount: '$1,965.81'} ]
  chartOptions: any

  linechartOptions = {
  series: [
    {
      name: 'Line A Solid',
      data: [10, 40, 25, 30, null, null] 
    },
    {
      name: 'Line A Dotted',
      data: [null, null, null, 30, 35, 60], 
    },
    {
      name: 'Line B',
      data: [20, 30, 35, 45, 30, 55]
    }
  ],
  chart: {
    type: 'line' as ChartType,
    height: 350,
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  stroke: {
    curve: 'smooth',
    width: [3, 3, 3],
    dashArray: [0, 5, 0] 
  } as ApexStroke,
  colors: ['#000', '#000', '#A8C5DA'], 
  markers: { size: 0 },
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  yaxis: { labels: {  formatter: function (val: number) {
            return val + 'M'; } }
  },
  legend: { show: false },
  tooltip: { enabled: false },
  dataLabels: { enabled: false }
};


pieChartType: any = "doughnut" ;

pieChartData = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [{
      data: [38.6, 20, 25, 16.4],
      backgroundColor: ['#1C1C1C', '#BAEDBD', '#B1E3FF', '#95A4FC'],
      borderRadius: 50, 
      borderWidth: 1
    }]
  };

  pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: { display: false, position: 'bottom' },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}%`
        }
      },
      datalabels: {
        color: 'transparent',
        font: { weight: 'bold', size: 14 },
        formatter: (value: number) => `${value}%`
      }
    }
  };



    ngOnInit() {
      this.createChart()
    }

    toogleTheme(){
      if(this.currentTheme === 'light'){
        document.body.classList.add('dark-theme');
        this.currentTheme = 'dark';
      }
      else{
                document.body.classList.remove('dark-theme');

        this.currentTheme = 'light'
      }
      this.themechanges.emit(this.currentTheme)

    }

    createChart(){
      this.chartOptions  =  {
      series: [
        {
          name: 'Product A',
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: 'Product B',
          data: [13, 23, 20, 8, 13, 27]
        },
      ],
      chart: {
        type: 'bar' as ChartType,
        color: '#000',
        stacked: true,
        toolbar: { show: false }
      },
      colors: ['#A8C5DA',  '#E5ECF6', '#F7F9FB'],

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 8,    
          columnWidth: '50%'
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val + 'M';
          }
        }
      },
      stroke: {
        show: false,
        width: 0,
        colors: ['#fff']
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
    };
    }
}








