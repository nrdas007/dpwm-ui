import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appUrls: any = [];
  constructor() { }

  ngOnInit(): void {
    this.appUrls = [
      {
         'menuName': 'Promo Event',
         'appName': 'DPWM',
         'urlPath': '/promoevent',
         'displayName': 'Promo Event',
         'menuOrder': 1,
         'userPrivileges': 'READWRITE',
         'default': false
      },
      {
         'menuName': 'Promotion Maintenance',
         'appName': 'DPWM',
         'urlPath': '/promotionMaintenance',
         'displayName': 'Promotion Maintenance',
         'menuOrder': 2,
         'userPrivileges': 'READWRITE',
         'default': false
      }
   ];
  }

}
