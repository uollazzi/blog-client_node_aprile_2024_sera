import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostAddComponent } from './components/post-add/post-add.component';

const routes: Routes = [
  { path: "", component: PostsListComponent },
  { path: "nuovo", component: PostAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
