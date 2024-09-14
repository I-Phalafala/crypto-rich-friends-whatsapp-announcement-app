import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwilioService {
  private apiUrl = 'https://api.twilio.com/2010-04-01/Accounts';

  constructor(private http: HttpClient) {}

  sendMessage(to: string, body: string) {
    const accountSid = environment.twilioAccountSid;
    const authToken = environment.twilioAuthToken;
    const from = environment.twilioWhatsAppNumber;

    const url = `${this.apiUrl}/${accountSid}/Messages.json`;

    const data = new URLSearchParams();
    data.append('To', `whatsapp:${to}`);
    data.append('From', `whatsapp:${from}`);
    data.append('Body', body);

    const headers = {
      'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post(url, data.toString(), { headers });
  }
}