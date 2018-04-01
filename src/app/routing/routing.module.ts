import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {AboutComponent }from '../about/about.component';
import {RepoComponent} from '../repo/repo.component';

const routes:Routes=[
  {path:"about",component:AboutComponent},
  {path:"repo", component:RepoComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
