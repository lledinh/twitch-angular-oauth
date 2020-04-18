import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}

export const authConfig: AuthConfig = {
  redirectUri: 'http://localhost:4200/login-check',
  clientId: '9emcfyzzhf6ujk3088nf2pnpkedgpc',
  scope: 'user_read chat:read chat:edit channel:moderate whispers:read whispers:edit',
  tokenEndpoint: 'https://id.twitch.tv/oauth2/token',
  userinfoEndpoint: 'https://id.twitch.tv/oauth2/userinfo',
  customQueryParams: {
    'response_type': 'token',
    'force_verify': true
  },
  oidc: false,
  issuer: 'https://id.twitch.tv/oauth2',
  showDebugInformation: true,
  disableAtHashCheck: true
};
