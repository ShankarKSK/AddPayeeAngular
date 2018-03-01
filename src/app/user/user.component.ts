import { Component, OnInit } from '@angular/core';
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import {User } from '../user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
 
})
export class UserComponent implements OnInit {
  clickMessage :String;
  private userArr: User[];
  private user: User;
  private loggeduser: User;
  private url:any;
  private show: boolean = false;
  private para:any;
  constructor(private http:Http,private router: Router,private routeParam:ActivatedRoute ) { } 

  ngOnInit() {

  }

  getallUser(){
    //this.clickMessage = 'Inside get All Users';
    //console.log(this.clickMessage);
     this.http.get("http://localhost:8082/users").subscribe((res:Response) =>{
        this.userArr = res.json();
       // console.log(this.clickMessage);
     }

    )
    
  }

  addPayee(user: User,ownCustId:String) {
    //this.clickMessage = 'Inside Add Payee';
    
    let headers = new Headers({ 'Content-Type': 'application/json','method':'POST' });
    let options = new RequestOptions({ headers: headers });
    this.url = "http://localhost:8080/ft/addAxis?ownCust_num="+ownCustId;
   
    console.log(options+"   ----   "+ownCustId);
    this.http.post(this.url,user,options).subscribe(
      res => {
       this.clickMessage = "Beneficiary Successfully Added !!! "
      },
      err => {
        console.log("Error occured");
      }
    );
  
  }

  search(phone_num:string,acc_num:string) {
    this.clickMessage = 'Inside Search Axis Account';
    let headers = new Headers({ 'Content-Type': 'application/json','method':'POST' });
    let options = new RequestOptions({ headers: headers });
    this.url = "http://localhost:8080/ft/axisOne?acc_num="+acc_num+"&phone_num="+phone_num;
    console.log(this.url);
    this.http.get(this.url).subscribe((res:Response) =>{
        this.user = res.json();
        this.show = true;
        console.log(this.user);
     }

    )
  }

  deletePayee(userId:String){
    this.clickMessage = 'Inside Delete User';
    this.url = "http://localhost:8082/user/"+userId;
    let headers = new Headers({ 'Content-Type': 'application/json','method':'DELETE' });
    let options = new RequestOptions({ headers: headers });
    console.log(this.clickMessage);
    this.http.delete(this.url,options).subscribe(
      res => {
       // console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
    this.getallUser();
  }


}
