import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable()
export class DataService {



  private loggedInUser = new BehaviorSubject<User>({user_id: "3", customer_id: "234567", user_Acc_num: "345678", user_Name: "NARESH", user_phone_num: "9025578583"});
  currentMessage = this.loggedInUser.asObservable();

  constructor() { }

  changeMessage(loggedUser: User) {
    
    this.loggedInUser.next(loggedUser)
    console.log("Common COmponent TS --"+this.loggedInUser);
  }

}