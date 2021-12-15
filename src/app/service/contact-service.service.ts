// import { Injectable } from '@angular/core';

import { Subject } from "rxjs";
import { Contact } from "../models/Contact.model";

// @Injectable({
//   providedIn: 'root'
// })
export class ContactServiceService {

  private contacts: Contact[]=[];

  // test new contact en dur
  // private contacts: Contact[] = [
  //   new Contact('aby', 'bibi', 'bibi@test.fr')
  // ];

  // Subject pour émettre l array Contact
  contactSubjet = new Subject<Contact[]>();

  // La méthode  emitContact()  déclenche le Subject
  emitContacts(){
    this.contactSubjet.next(this.contacts.slice());
  }
  // ajoute un objet  Contact  à l'array, puis déclenche le Subject.
  addContact(contact: Contact){
    this.contacts= this.getContacts();
    this.contacts.push(contact);
    this.emitContacts();
  }
  set contact(contacts: Contact[]) {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }

  get contact(): Contact[] {
    return JSON.parse(localStorage.getItem('contact') || '[]');
  }

// autre syntaxe
  getContacts(){
    return JSON.parse(localStorage.getItem('contact') || '[]')
  }

  saveContact(){
    localStorage.setItem('contact', JSON.stringify(this.contacts));
    console.log(this.contacts);
  }
  getContactDetail(contact:Contact){
    const i = this.contacts.indexOf(contact);
    // const contactDetail = this.contactService.contact[i];

    console.log(i);
    // console.log(contactDetail);
  }



  constructor() { }
}
