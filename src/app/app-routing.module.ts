import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StartProjectComponent } from './start-project/start-project.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'start-project', component:StartProjectComponent},
  {path:'admin', component:AdminComponent, children: [
    {path:'', component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
