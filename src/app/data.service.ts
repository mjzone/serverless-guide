import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AmplifyService } from "aws-amplify-angular";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(
    private http: HttpClient,
    private amplifyService: AmplifyService
  ) {}

  getPosts() {
    // return this.amplifyService.
    return this.amplifyService.api().get("blogCRUD", "/blog/public", null);
  }
}
