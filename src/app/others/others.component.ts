import { Component, OnInit } from '@angular/core';
import {OtherUser } from '../OtherUser';
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import {User } from '../user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import {Router,ActivatedRoute} from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  private loggeduser: User;
  private otheruser: OtherUser;
  private url:any;
  private show: boolean = false;
  private confirmAdding: boolean = false;
  private para:any;
  constructor(private http:Http,private router: Router,private routeParam:ActivatedRoute,private data: DataService) { }

  ngOnInit() {

    this.routeParam.params.subscribe((params: ActivatedRoute) => {
      this.para=params['cust_Id']
    })
   // console.log(this.para +"heloo");
    this.http.get("http://localhost:4200/ft/axisOneCust?cust_Id="+this.para).subscribe((res:Response) =>{
         this.loggeduser = res.json();
         //console.log(this.loggeduser);
         this.data.changeMessage(this.loggeduser)
      })
  }

  comfirmPayee(cardType:string,cardNum:string,cardNum2:string){

    if(cardNum==cardNum2){
      this.otheruser ={
        'bene_visacard_no':cardNum
        }

        this.show = true;
    }
    console.log("Inside Non User");
  }


  addPayee(otheruser: OtherUser,ownCustId:String) {
    //this.clickMessage = 'Inside Add Payee';
    
    let headers = new Headers({ 'Content-Type': 'application/json','method':'POST' });
    let options = new RequestOptions({ headers: headers });
    this.url = "http://localhost:4200/ft/benificiaries/insertRecipients?type=VMT&ownCust_num="+ownCustId;
   
    console.log(options+"   ----   "+ownCustId);
    this.http.post(this.url,otheruser,options).subscribe(
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
