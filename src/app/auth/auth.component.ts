import { Component, OnInit } from "@angular/core";
import { AmplifyService } from "aws-amplify-angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(
    private _amplifyService: AmplifyService,
    private _router: Router
  ) {
    this._amplifyService = _amplifyService;
    this._amplifyService.authStateChange$.subscribe(authState => {
      _router.navigateByUrl("/posts");
    });
  }

  ngOnInit() {}
}
