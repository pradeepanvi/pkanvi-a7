import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ListComponent } from './portfolio/list/list.component';
import { DetailComponent } from './portfolio/detail/detail.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'start-project', component:StartProjectComponent},
  {path:'portfolio', component:PortfolioComponent, children: [
    {path:'', component:ListComponent},
    {path:':id', component:DetailComponent}
  ]},
  {path:'admin', component:AdminComponent, children: [
    {path:'', component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
