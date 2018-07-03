import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'k-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contactApiUrl: string = 'https://a605xjaczg.execute-api.us-east-1.amazonaws.com/pp/contact';
  private name: string;
  private message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
// maybe maybe service later    
    this.http.post(this.contactApiUrl, { name: this.name, message: this.message });
  }

}
