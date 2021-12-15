import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { ContactServiceService } from './service/contact-service.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ContactServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
