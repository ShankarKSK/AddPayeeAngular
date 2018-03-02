import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule , Response ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { NonuserComponent } from './nonuser/nonuser.component';
import { OthersComponent } from './others/others.component';
import { DataService } from "./data.service";

const appRoutes: Routes = [
  
  {
    path: 'user/:cust_Id', component: UserComponent   
  },
  {
    path: '', component: LoginComponent   
  },
 
  {
    path: 'nonuser/:cust_Id', component: NonuserComponent   
  },
  {
    path: 'upid/:cust_Id', component: NonuserComponent   
  },
  {
    path: 'others/:cust_Id', component: OthersComponent   
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    CommonComponent,
    NonuserComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(appRoutes),  
  ],
  providers: [HttpModule,BrowserModule,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
