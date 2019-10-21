import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { TimesheetComponent } from './timesheet/timesheet.component';

const appRoutes: Routes = [
  {path:'',component: EmployeeListComponent},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: TimesheetComponent },
  // {path:'dashboard',component: DashboardComponent},
  // {path:'profile',component: ProfileComponent},
  // { path: '**', component: EmployeeListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TimesheetComponent
  ],
  imports: [
    [RouterModule.forRoot(appRoutes)],
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
