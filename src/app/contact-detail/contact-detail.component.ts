import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { ContactServiceService } from '../service/contact-service.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

 public contacts: Contact[] = [];

 @Input() contact = '';



  constructor(private contactService: ContactServiceService
    ) { }

  ngOnInit(): void {
    console.log(this.contactService.contact[5]);
    console.log('ok component');

  }

  getContactDetail(contact:Contact){
    const i = this.contacts.indexOf(contact);
    const contactDetail = this.contactService.contact[i];

    console.log(i);
    console.log(contactDetail);
  }

}
