import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
//message : string='some welcome message'
  name=''
//ActivatedRoute- Dependency injection to accept welcome/:name
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // COMPILATION ERROR this.message=5
    //console.log(this.message)
    this.name=this.route.snapshot.params['name'];
     
  }

}
