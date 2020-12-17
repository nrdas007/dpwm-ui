import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  username = '';
  visibleSidebar = false;
  activeurl = '';
  showHeaderButtons = false;
  public parameterValue = '';
  constructor(private router: Router) { // , private activatedRoute: ActivatedRoute
    const uName = sessionStorage.getItem('username') || '';
    this.username = JSON.parse(uName);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.activeurl = event.urlAfterRedirects.split('?')[0];
        console.log('this.activeurl', this.activeurl);
        if (this.activeurl === '/dashboard') {
          this.showHeaderButtons = false;
        } else {
          this.showHeaderButtons = true;
        }
      }
    });
  }

}
