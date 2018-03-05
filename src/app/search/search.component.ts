import { Component, OnInit } from '@angular/core';
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import {User } from '../user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import {Router,ActivatedRoute} from "@angular/router";
import { DataService } from "../data.service";
import { Search } from '../SearchModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  clickMessage :String;
  private userArr: User[];
  private user: User;
  private loggeduser: User;

  private searchuser:Search;
  private url:any;
  private searchShow: boolean = false;
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

  searchRecei(beneType:String,custId:String){
    this.http.get("http://localhost:4200/ft/benificiaries/getRecipients?type="+beneType+"&custId="+custId).subscribe((res:Response) =>{
      this.searchuser = res.json();
      this.searchShow = true;
      this.data.changeMessage(this.loggeduser)
   })
  }

}
