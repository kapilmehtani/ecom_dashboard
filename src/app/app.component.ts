import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './order-list/order-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NotificationsComponent, DashboardComponent, OrderListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecom_dashboard';

  selectedtab = 'default'
  currentTheme = 'light';


  selectedtabChange(tabname: string){
    console.log(tabname);
    this.selectedtab = tabname;
  }
  themechanges(theme: string){
    this.currentTheme = theme
  }
}
