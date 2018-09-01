import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogFeedComponent } from "src/app/blog-feed/blog-feed.component";
import { PostCreateComponent } from "src/app/post-create/post-create.component";
import { PostEditComponent } from "src/app/post-edit/post-edit.component";
import { PostsComponent } from "src/app/posts/posts.component";
import { PostDetailsComponent } from "src/app/post-details/post-details.component";
import { AuthComponent } from "src/app/auth/auth.component";
import { AuthGuardService } from "src/app/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/feed",
    pathMatch: "full"
  },
  {
    path: "auth",
    component: AuthComponent
  },
  {
    path: "feed",
    component: BlogFeedComponent
  },
  {
    path: "posts",
    component: PostsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "post",
    component: PostCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "post/:id",
    component: PostDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "post/edit/:id",
    component: PostEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    component: BlogFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
