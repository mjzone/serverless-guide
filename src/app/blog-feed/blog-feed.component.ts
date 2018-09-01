import { Component, OnInit } from "@angular/core";
import { AmplifyService } from "aws-amplify-angular";
import { Observable } from "rxjs";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-blog-feed",
  templateUrl: "./blog-feed.component.html",
  styleUrls: ["./blog-feed.component.scss"]
})
export class BlogFeedComponent implements OnInit {
  feeds: any[];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPosts().then(data => {
      debugger;
      this.feeds = data;
    });
  }
}
