import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ListComponent } from './portfolio/list/list.component';
import { DetailComponent } from './portfolio/detail/detail.component';
import { RollDashboardEditComponent } from './admin/dashboard/roll-dashoard/roll-dashboard-edit/roll-dashboard-edit.component';
import { FrontEndDashboardEditComponent } from './admin/dashboard/front-end-dashboard/front-end-dashboard-edit/front-end-dashboard-edit.component';
import { BackEndDashboardEditComponent } from './admin/dashboard/back-end-dashboard/back-end-dashboard-edit/back-end-dashboard-edit.component';
import { ExtraDashboardEditComponent } from './admin/dashboard/extra-dashboard/extra-dashboard-edit/extra-dashboard-edit.component';
import { PortfolioDashboardEditComponent } from './admin/dashboard/portfolio-dashboard/portfolio-dashboard-edit/portfolio-dashboard-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'start-project', component:StartProjectComponent},
  {path:'portfolio', component:PortfolioComponent, children: [
    {path:'', component:ListComponent},
    {path:':id', component:DetailComponent}
  ]},
  {path:'admin', component:AdminComponent, children: [
    {path:'', component:DashboardComponent},
    {path:'add-roll', component:RollDashboardEditComponent},
    {path:'edit-roll/:id', component:RollDashboardEditComponent},
    {path:'add-extra', component:ExtraDashboardEditComponent},
    {path:'edit-extra/:id', component:ExtraDashboardEditComponent},
    {path:'edit-Fskill/:id', component:FrontEndDashboardEditComponent},
    {path:'add-Bskill', component:BackEndDashboardEditComponent},
    {path:'edit-Bskill/:id', component:BackEndDashboardEditComponent},
    {path:'edit-extra/:id', component:ExtraDashboardEditComponent},
    {path:'edit-portfolio/:id', component:PortfolioDashboardEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
