import { Component, OnInit } from '@angular/core';
import {NonAxisUser } from '../NonAxisUser';
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import {Router,ActivatedRoute} from "@angular/router";
import { DataService } from "../data.service";
import {User } from '../user';

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
  private para:any;
  private loggeduser: User;
  private confirmAdding: boolean = false;
  constructor(private http:Http,private router: Router,private routeParam:ActivatedRoute,private data: DataService ) { }

  ngOnInit() {

    this.routeParam.params.subscribe((params: ActivatedRoute) => {
      this.para=params['cust_Id']
    })
    console.log(this.para +"heloo");
    this.http.get("http://localhost:4200/ft/axisOneCust?cust_Id="+this.para).subscribe((res:Response) =>{
         this.loggeduser = res.json();
         console.log("NON User -- "+this.loggeduser);
         this.data.changeMessage(this.loggeduser)
      })
  }

  comfirmPayee(nickname:string,accName:string,accNum1:string,accNum2:string,ifsc:string){

    if(accNum1==accNum2){
      this.nonAxisUser ={
        'bene_ifsc_code':ifsc,'bene_acc_no':accNum1,'bene_acc_name':accName,'bene_nick_name':nickname
        }

        this.show = true;
    }
    console.log("Inside Non User");
  }


  addPayee(nonAxisUser: NonAxisUser,ownCustId:String) {
    //this.clickMessage = 'Inside Add Payee';
    
    let headers = new Headers({ 'Content-Type': 'application/json','method':'POST' });
    let options = new RequestOptions({ headers: headers });
    this.url = "http://localhost:4200/ft/benificiaries/insertRecipients?type=NonAxis&ownCust_num="+ownCustId;
   
    console.log(options+"   ----   "+ownCustId);
    this.http.post(this.url,nonAxisUser,options).subscribe(
      res => {
        this.confirmAdding = true;
       console.log(this.confirmAdding);
      },
      err => {
        console.log("Error occured");
      }
    );
  
  }

}
