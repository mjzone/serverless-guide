import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { BlogFeedComponent } from "./blog-feed/blog-feed.component";
import { PostsComponent } from "./posts/posts.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostEditComponent } from "./post-edit/post-edit.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuardService } from "src/app/auth-guard.service";
import { AuthenticatorComponent } from "aws-amplify-angular";
import { DataService } from "src/app/data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlogFeedComponent,
    PostsComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AmplifyService,
    AuthGuardService,
    AuthenticatorComponent,
    DataService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
