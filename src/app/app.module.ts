import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ContactComponent } from './home/contact/contact.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ListComponent } from './portfolio/list/list.component';
import { DetailComponent } from './portfolio/detail/detail.component';
import { RollDashoardComponent } from './admin/dashboard/roll-dashoard/roll-dashoard.component';
import { RollDashboardEditComponent } from './admin/dashboard/roll-dashoard/roll-dashboard-edit/roll-dashboard-edit.component';
import { ExtraDashboardComponent } from './admin/dashboard/extra-dashboard/extra-dashboard.component';
import { ExtraDashboardEditComponent } from './admin/dashboard/extra-dashboard/extra-dashboard-edit/extra-dashboard-edit.component';
import { FrontEndDashboardComponent } from './admin/dashboard/front-end-dashboard/front-end-dashboard.component';
import { FrontEndDashboardEditComponent } from './admin/dashboard/front-end-dashboard/front-end-dashboard-edit/front-end-dashboard-edit.component';
import { BackEndDashboardComponent } from './admin/dashboard/back-end-dashboard/back-end-dashboard.component';
import { BackEndDashboardEditComponent } from './admin/dashboard/back-end-dashboard/back-end-dashboard-edit/back-end-dashboard-edit.component';
import { PortfolioDashboardComponent } from './admin/dashboard/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioDashboardEditComponent } from './admin/dashboard/portfolio-dashboard/portfolio-dashboard-edit/portfolio-dashboard-edit.component';

import { DataService } from "../shared/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AdminComponent,
    DashboardComponent,
    AboutComponent,
    WhatWeDoComponent,
    ProjectsComponent,
    ContactComponent,
    StartProjectComponent,
    PortfolioComponent,
    ListComponent,
    DetailComponent,
    RollDashoardComponent,
    RollDashboardEditComponent,
    ExtraDashboardComponent,
    ExtraDashboardEditComponent,
    FrontEndDashboardComponent,
    FrontEndDashboardEditComponent,
    BackEndDashboardComponent,
    BackEndDashboardEditComponent,
    PortfolioDashboardComponent,
    PortfolioDashboardEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
