import { Component } from '@angular/core';
import { Contact } from './models/Contact.model';
import { ContactServiceService } from './service/contact-service.service';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact';
  public contacts: Contact[] = [];

  constructor(private contactService: ContactServiceService){
  }
    ngOnInit(){
      this.contacts = this.contactService.getContacts();
      console.log(this.contacts[0]);
    }



    /**
   * Cette fonction se déclenche dans
   * l'application lorsqu'une nouvelle
   * tâche est créée par l'utilisateur
   * dans le composant app-add-task.
   * @param newContact
   */
     newContact(event: any) {
    this.contacts.push(event.contact);
    // this.contactService.saveContact()
    this.contactService.getContacts()
    this.contactService.contact = this.contacts;
  }

  getContactDetail(contact:Contact){
    const i = this.contacts.indexOf(contact);
    const contactDetail = this.contactService.contact[i];

    console.log(i);
    console.log(contactDetail);
    return contact;
  }
}
