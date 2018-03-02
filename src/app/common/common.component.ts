import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Http , Response,Headers,RequestOptions} from '@angular/http';
import {User } from '../user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import { DataService } from '../data.service';

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
  constructor(private http:Http,private router: Router,private routeParam:ActivatedRoute,private data:DataService) { }

  ngOnInit() {
    //console.log("Inside User TS --"+this.loggeduser);
    this.data.currentMessage.subscribe(loggeduser => this.loggeduser = loggeduser)
  }

}
