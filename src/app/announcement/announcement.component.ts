import { Component } from '@angular/core';
import { TwilioService } from '../twilio.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  to: string = '';
  message: string = '';

  constructor(private twilioService: TwilioService) {}

  sendAnnouncement() {
    this.twilioService.sendMessage(this.to, this.message).subscribe(response => {
      console.log('Message sent successfully', response);
    }, error => {
      console.error('Error sending message', error);
    });
  }
}