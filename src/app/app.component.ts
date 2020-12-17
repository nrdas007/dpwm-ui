import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AdalService } from 'adal-angular4';

import { environment } from '../environments/environment';

const authConfig = {
  tenant: environment.sso.tenant,
  clientId: environment.sso.clientId,
  redirectUri: window.location.origin + '/',
  postLogoutRedirectUri: window.location.origin + '/'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Digital Promotion Workflow Management';
  template = '<img src="./../../assets/images/800.gif" height="20px" width="20px"/>';
  authenticated = false;
  constructor(
    private service: AdalService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    ) {

    console.log('oninit');
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);

    if (environment.sso.validate) {
      this.service.init(authConfig);
      this.service.handleWindowCallback();

      if (!this.service.userInfo.authenticated) {

        this.service.login();
        if (!sessionStorage.authTime) {
          sessionStorage.setItem('firstAuthTime', Date.now().toString());
        }
        sessionStorage.setItem('authTime', Date.now().toString());
        console.log('updated auth time');
      } else {
        sessionStorage.setItem('authToken', JSON.stringify(this.service.userInfo.token));
        sessionStorage.setItem('username', JSON.stringify(this.service.userInfo.profile.given_name + ' ' +
          this.service.userInfo.profile.family_name));
        if (window.location.hash.substr(1, 8) !== 'id_token') {
          this.authenticated = true;
        }
      }

      if (window.top === window.self) {
        const diff = Date.now() - sessionStorage.authTime;
        console.log('Authenticated on', (diff / 60000).toFixed(2), 'min ago');
        console.log('first renew by', ((58 * 60 * 1000 - diff) / 60000).toFixed(2), 'min after');
        // setTimeout(() => {
        //   this._adalInstance._renewToken('Timeout');
        // }, 58 * 60 * 1000 - diff);

        setInterval(() => {
          const maxTime = (sessionStorage.authTime) ? parseInt(sessionStorage.firstAuthTime, 10) + 3 * 60 * 60 * 1000 : undefined;
          if (maxTime && (Date.now() < maxTime)) {
            console.log('Renew Token', maxTime, Date.now(), Date.now() - maxTime);
            // this._adalInstance._renewToken('Timeout');
          } else {
            if (sessionStorage.authTime && (diff < (59 * 60 * 1000))) {
              if (window.confirm('Your session is about to expire, would you like to extend?')) {
                console.log('Renew Token Final', Date.now());
                // this._adalInstance._renewToken('Timeout');
              }
            }
          }
        }, 58 * 60 * 1000);
        setTimeout(this.removeAuthFrames, 60 * 60 * 1000 - diff);
        setInterval(this.removeAuthFrames, 60 * 60 * 1000);
      }
    }
  }

  ngOnInit(): void {
     // update the url

  }


  removeAuthFrames(): void {
    const iframe = document.getElementById('adalRenewFrameTimeout');
    if (iframe) {
      iframe.remove();
      console.log('Removed iFrame', Date.now());
    }
  }
}
