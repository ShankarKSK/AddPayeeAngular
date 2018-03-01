import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  private message :String;
  ngOnInit() {
  }

  login(username:String,password:String){
    
    
      if(username == password ){
          this.message = "Success";
         // this.router.navigateByUrl('/user',username); 
          this.router.navigate(['user',username]); 
      }else{
        this.message="Please Enter Proper Credentials!!!"
      }

      console.log(this.message);
  }
}
