import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AmplifyService } from "aws-amplify-angular";
import { AuthenticatorComponent } from "aws-amplify-angular";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private amplifyService: AmplifyService,
    private _router: Router,
    private _authComponent: AuthenticatorComponent
  ) {}

  canActivate() {
    console.log("AuthGuard#canActivate called");
    this._authComponent.hide = ["greeting"];
    return this.amplifyService
      .auth()
      .currentAuthenticatedUser()
      .then(user => true)
      .catch(err => {
        this._router.navigateByUrl("/auth");
        return false;
      });
  }
}
