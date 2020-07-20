import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from './contact.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})

export class PhonebookComponent implements OnInit {

  @ViewChild('form') addForm: NgForm;

  constructor() { }
  Onedit : boolean =false;

  contacts : Contact [] = [
    {
      name : "User1",
      phone_no : 123456789
     }];
   ContactPicked : Contact;

  ngOnInit(): void {
  }

  editContact(C : Contact)
  {
    this.Onedit = true;
    this.ContactPicked = C;
    this.addForm.controls['name'].setValue(this.ContactPicked.name);
    this.addForm.controls['phone_no'].setValue(this.ContactPicked.phone_no);
  }


  deleteContact(c: Contact) {
    console.log(c);
    const index: number = this.contacts.indexOf(c);
    if (index !== -1) 
    {
        this.contacts.splice(index, 1);
    }  
  }

  onSubmit(){
    const name = this.addForm.value['name'];
    const phone_no = this.addForm.value['phone_no'];

    if (!this.Onedit)
    {
      const c = new Contact();
      c.name = name;
      c.phone_no = phone_no;
      this.contacts.push(c);
      this.addForm.reset()
    }
    else
    {
      this.deleteContact(this.ContactPicked);
      this.ContactPicked.name = name;
      this.ContactPicked.phone_no = phone_no;
      this.contacts.push(this.ContactPicked);
      this.addForm.reset();
      this.Onedit = false;
    }
  }
}
