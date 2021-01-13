import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='Shubham'
password=''
errorMessage='Invalid Credentials'
invalidLogin=false

//Router
//Angular.giveMeRouter
//Dependency injection- add in constructor parameter


  constructor(private router: Router,private hardcodedAuticationService: HardcodedAuthenticationService) {  // by default it is member variable
  }
  

  ngOnInit() {
  }

  handleLogin(){ 
    
   // console.log(this.username);
   if(this.hardcodedAuticationService.authenticate(this.username,this.password)){
    //redirect yo welcome page 
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false
   }
   else{
    this.invalidLogin=true
     
   }
   
  }
  
}
