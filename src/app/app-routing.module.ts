import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path:'posts',component:PostsComponent
      }
    ]
    },
    {
      path:'sidebar',
      component:SidebarComponent,
      },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
