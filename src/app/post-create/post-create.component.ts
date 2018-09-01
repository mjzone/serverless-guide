import { Component, OnInit } from "@angular/core";
import { API } from "aws-amplify";
import { AmplifyService } from "aws-amplify-angular";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  post: IPost;

  constructor(private amplifyService: AmplifyService) {}

  ngOnInit() {}

  async onPublish() {
    let results = await this.amplifyService.api().post("blogCRUD", "/blog", {
      body: {
        title: "First Post Title",
        body:
          "This is the description of the first post. This is the description of the first post. This is the description of the first post. This is the description of the first post. This is the description of the first post."
      }
    });
    debugger;
  }

  onSave() {
    debugger;
    alert("Save clicked");
  }
}

interface IPost {
  title: string;
  body: string;
}
