import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import {User } from '../user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  clickMessage :String;
  private userArr: User[];
  private user: User;
  private loggeduser: User;
  private url:any;
  private show: boolean = false;
  private para:any;
  constructor(private http:Http,private router: Router,private routeParam:ActivatedRoute) { }

  ngOnInit() {
    this.routeParam.params.subscribe((params: ActivatedRoute) => {
      this.para=params['cust_Id']
    })
    console.log(this.para +"heloo");
    this.http.get("http://localhost:8080/ft/axisOneCust?cust_Id="+this.para).subscribe((res:Response) =>{
         this.loggeduser = res.json();
         
      })
  }

}
