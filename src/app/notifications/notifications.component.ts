import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnChanges {

  @Input() currentTheme = 'light';

    ngOnChanges(changes: SimpleChanges): void {
    if(changes['currentTheme']){
      console.log(this.currentTheme)
    }
  }
  notifications = [{icon: 'bi bi-bug', title: 'You have a bug that needs atention', time: 'just Now'}, {icon: 'bi bi-person', title: 'New user registered', time: '59 minutes ago'}, {icon: 'bi bi-broadcast', title: 'Andi lanes subscribes to you.', time: '1 hour ago'}, {icon: 'bi bi-bug', title: 'You have a bug that needs atention', time: '12 hours ago'}]
  activities = [{imageSrc: 'assets/activities.png', title:'You have a bug that needs attention', time:'Just Now'}, {imageSrc: 'assets/activities.png', title:'Released a new version', time:'59 minutes ago'}, {imageSrc: 'assets/activities.png', title:'Submitted a  bug', time:'12 hours ago'}, {imageSrc: 'assets/activities.png', title:'Submitted A data in page X', time:'Today, 11:59 AM'}, {imageSrc: 'assets/activities.png', title:'Deleted a page in Project X', time:'Feb 2, 2023'}, ]

  contacts = [{name: 'Natali Criag', img: 'assets/natali.png'}, {name: 'Drew Cano', img: 'assets/drew.png'}, {name: 'Orlando Diggs', img: 'assets/orlando.png'}, {name: 'Andi Lane', img: 'assets/natali.png'}, {name: 'Kate Morrison', img: 'assets/natali.png'}, {name: 'Koray Okunus', img: 'assets/natali.png'},]
}
