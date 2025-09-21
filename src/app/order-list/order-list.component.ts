import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {

  colormap : { [key: string]: string } = {
    'In Progress': '#8A8CD9',
    'Complete': '#4AA785',
    'Pending': '#59A8D4',
    'Approved': '#FFC555',
    'Rejected': '#1C1C1C66'
  }

  temporderlist = [{
    id: '#CM9801',
    name: 'Natali Craig',
    avatar: 'assets/natali.png',
    project: 'Landing Page',
    location: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  {
    id: '#CM9802',
    name: 'Kate Morrison',
    avatar: 'assets/kate.png',
    project: 'CRM Admin pages',
    location: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete'
  },
  {
    id: '#CM9803',
    name: 'Drew Cano',
    avatar: 'assets/drew.png',
    project: 'Client Project',
    location: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending'
  },
  {
    id: '#CM9804',
    name: 'Orlando Diggs',
    avatar: 'assets/orlando.png',
    project: 'Admin Dashboard',
    location: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved'
  },
  {
    id: '#CM9805',
    name: 'Andi Lane',
    avatar: 'assets/andi.png',
    project: 'App Landing Page',
    location: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected'
  },
];
orderlist  = [...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist, ...this.temporderlist];
pagesize = 10;
pagenumber = 1;
numberofPages = Math.ceil(this.orderlist.length / this.pagesize);
orderlistdatasource = this.orderlist
settings = {
  columns: {
    id: {
      title: 'Order ID',
      sort: true,
    },
    name: {
      title: 'User',
      sort: true
    },
    project: {
      title: 'Project',
      sort: true
    },
    location: {
      title: 'Address',
    },
    date: {
      title: 'Date',
      sort: true
    },
    status: {
      title: 'Status',
      sort: true,
      // type : 'html',
      valuePrepareFunction: (status: any) => {
        return `<span class="badge ${status === 'In Progress' ? 'bg-info' : status === 'Complete' ? 'bg-success' : status === 'Pending' ? 'bg-warning' : status === 'Approved' ? 'bg-primary' : 'bg-danger'}">${status}</span>`;
    },
  },
  actions: {},
  pager: {
    display: true,
    perPage: 10
  },
  attr: {
    class: 'table'
  }
}
}



}
