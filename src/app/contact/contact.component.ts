import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'k-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactApiUrl: string = 'https://a605xjaczg.execute-api.us-east-1.amazonaws.com/pp/contact';
  private name: string;
  private message: string;
  private messageConfirmation: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
// maybe maybe service later    
    this.http.post(this.contactApiUrl, { name: this.name, message: this.message })
      .subscribe(
        data  => { this.messageSuccess(); },
        error => { this.messageFailure(error); }
      );
  }

  messageSuccess() {
    this.name = '';
    this.message = '';
    this.messageConfirmation = "Thanks for the message :)";  
  }

  messageFailure(error: any) {
    console.log(error);
    this.messageConfirmation = "Uh oh... Try again later :("
  }

}
