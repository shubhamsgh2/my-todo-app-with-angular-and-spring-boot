import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 //isUserLoggedIn: boolean=false;
  constructor(public hardcodedAuticationService: HardcodedAuthenticationService) { } // here we use public while injecting service because View doesn't access private  

  ngOnInit() {
   // this.isUserLoggedIn= this.hardcodedAuticationService.isUserLoggedIn();
  }

}
