import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() currentTheme = 'light';

  @Input() selectedtab: string = 'Default';
  @Output() selectedtabChange = new EventEmitter<string>()
  dashboardList = [{name: 'Default', icon: 'assets/icons/dashboard.svg'},{name: 'Ecommerce', icon: 'assets/icons/ecommerce.svg'},{name: 'Projects', icon: 'assets/icons/analytics.svg'},{name: 'Online Courses', icon: 'assets/icons/online-projects.svg'},];
  pagesList = ['User Profile', 'Overview', 'Projects', 'Campaingns', 'Documents', 'Followers']


      ngOnChanges(changes: SimpleChanges): void {
      if(changes['currentTheme']){
        console.log(this.currentTheme)
      }
    }
  ngOnInit(): void {
    this.selectedtabChange.emit('Default')
  }

  changetab(tabname: string){
    this.selectedtab = tabname;
    if(this.selectedtab!='Default' && this.selectedtab != 'Ecommerce'){
      this.selectedtab='Default';
    }
    this.selectedtabChange.emit(this.selectedtab);


  }
}
