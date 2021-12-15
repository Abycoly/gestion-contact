import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../models/Contact.model';
import { ContactServiceService } from '../service/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: Contact[]=[];

  ContactSubscription?: Subscription;

  @Input() newEvent = new EventEmitter();
  constructor(private contactService: ContactServiceService) { }



  ngOnInit(): void {
    this.ContactSubscription = this.contactService.contactSubjet.subscribe(
      (contacts:Contact[])=>{
        this.contacts = contacts;
      }
    )
    this.contactService.emitContacts();
    this.contactService.getContacts();
    this.contacts = this.contactService.getContacts();

    console.log(this.contactService.contact);
  }

  getContactDetail(contact:Contact){
    const i = this.contacts.indexOf(contact);
    const contactDetail = this.contactService.contact[i];

    // for (let i = 0; i < this.contacts!.length; i++ ) {
    //   const detail = this.contacts![i];
    //   console.log(detail);
    // }
    console.log(i);
    console.log(contactDetail);
    this.newEvent.emit({contactDetail: contactDetail})

  }


//  public contactI = this.getContactDetail


  ngOnDestroy(): void {
this.contactService.emitContacts();
  }

}
