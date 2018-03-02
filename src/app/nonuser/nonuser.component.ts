import { Component, OnInit } from '@angular/core';
import {NonAxisUser } from '../NonAxisUser';
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nonuser',
  templateUrl: './nonuser.component.html',
  styleUrls: ['./nonuser.component.css']
})
export class NonuserComponent implements OnInit {
  private nonAxisUser: NonAxisUser;
  clickMessage :String;
  private show: boolean = false;
  private url:any;
  constructor(private http:Http,private router: Router,private routeParam:ActivatedRoute ) { }

  ngOnInit() {
  }

  comfirmPayee(nickname:string,accName:string,accNum1:string,accNum2:string,ifsc:string){

    if(accNum1==accNum2){
      this.nonAxisUser ={
        'ifsc':ifsc,'user_Acc_num':accNum1,'user_Name':accName,'nickname':nickname
        }

        this.show = true;
    }
    console.log("Inside Non User");
  }


  addPayee(nonAxisUser: NonAxisUser,ownCustId:String) {
    //this.clickMessage = 'Inside Add Payee';
    
    let headers = new Headers({ 'Content-Type': 'application/json','method':'POST' });
    let options = new RequestOptions({ headers: headers });
    this.url = "http://localhost:4200/ft/addAxis?ownCust_num="+ownCustId;
   
    console.log(options+"   ----   "+ownCustId);
    this.http.post(this.url,nonAxisUser,options).subscribe(
      res => {
       this.clickMessage = "Beneficiary Successfully Added !!! "
      },
      err => {
        console.log("Error occured");
      }
    );
  
  }

}
