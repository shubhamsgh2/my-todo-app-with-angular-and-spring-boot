import { Injectable } from '@angular/core';
// @Injectable decorator can be used to inject this class anywhere throughout the code
//service is create when there is common functionality to add in several webpages

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  
  authenticate(username,password){

    //console.log('before'+ this.isUserLoggedIn());

    if(username==="Shubham" && password ==='dummy'){
      sessionStorage.setItem('aunthenticaterUser',username);

      //console.log('after'+ this.isUserLoggedIn());
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('aunthenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('aunthenticaterUser');
  }
}
