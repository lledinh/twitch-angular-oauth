import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();
    console.log(claims);
    console.log('getIdToken ' + this.oauthService.getIdToken());
    console.log('getAccessToken ' + this.oauthService.getAccessToken());
    console.log('getGrantedScopes ' + this.oauthService.getGrantedScopes());

    return null;
  }

}
