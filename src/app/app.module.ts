import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { TwilioService } from './twilio.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TwilioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
