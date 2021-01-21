import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
//message : string='some welcome message'
  name: String
  welcomeMessageFromService: String
//ActivatedRoute- Dependency injection to accept welcome/:name
  constructor(private route: ActivatedRoute,private service: WelcomeDataService) { }

  getWelcomeMessage(){
    
    //service call http://localhost:8080/hello-world-bean
    //Subscribe() a syncronous call...will not return result, what to do when response is returned?
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error=> this.handleErrorResponse(error)
    );
    console.log('last line of get welcome message')

  }
  getWelcomeMessageWithParameter(){
    
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error=> this.handleErrorResponse(error)
    );
    //console.log('last line of get welcome message')

  }
  

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message
    // console.log(response);
    // console.log(response.message)
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message;
    

  }
  ngOnInit() {
    // COMPILATION ERROR this.message=5
    //console.log(this.message)
    this.name=this.route.snapshot.params['name'];
     
  }

}
