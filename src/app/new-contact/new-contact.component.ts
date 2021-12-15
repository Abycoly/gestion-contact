import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/Contact.model';
import { ContactServiceService } from '../service/contact-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contactForm!: FormGroup;

  // FormBuilder  est une classe qui vous met à disposition des méthodes facilitant la création d'objet  FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactServiceService,
          ) { }



  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    //  la méthode  group  à l'intérieur de votre méthode  initForm()  pour commencer à créer le formulaire
    // méthode  group  prend comme argument un objet où les clés correspondent aux noms des contrôles souhaités
    // et les valeurs correspondent aux valeurs par défaut de ces champs.  Puisque l'objectif est d'avoir des champs vides au départ,
    // chaque valeur ici correspond au string vide.
    this.contactForm = this.formBuilder.group({
      //  les  Validators :  Pour ajouter la validation pour chaque champs
      firstName:[ '', Validators.required],
      pseudo:[ '', Validators.required],
      email:[ '', [Validators.required, Validators.email]],
    })

  }

  onSubmitForm(){
    // méthode  onSubmitForm()  récupère la  value  du formulaire, et crée un nouvel objet Contact
    const formValue = this.contactForm.value;
    const newContact = new Contact(
      formValue['firstName'],
      formValue['pseudo'],
      formValue['email']
    );
    // ajoute le new contact au service
    this.contactService.addContact(newContact);
    this.contactService.saveContact();
    this.contactService.getContacts()
  }

  // @Output() newConatctEvent = new EventEmitter();

  // public contact: Contact = new Contact();

  // addContact(){
  //   this.newConatctEvent.emit({ contacts: this.contact})
  // }

}
