import { Injectable } from '@angular/core';
// @Injectable decorator can be used to inject this class anywhere throughout the code
//service is create when there is common functionality to add in several webpages

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  
  authenticate(username,password){     // Authentication logic here

    //console.log('before'+ this.isUserLoggedIn());

    if(username==="Shubham" && password ==='dummy'){
      sessionStorage.setItem('aunthenticaterUser',username);   //  Store ssession to check if user is login or not.(for menu security or others purpose)

      //console.log('after'+ this.isUserLoggedIn());
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){       // to enable the menus while login ( security purpose)
    let user=sessionStorage.getItem('aunthenticaterUser')
    return !(user === null)   // return false if user is null ie. no stored session
  }

  logout(){              // to logout delete the stored session
    sessionStorage.removeItem('aunthenticaterUser');
  }
}
