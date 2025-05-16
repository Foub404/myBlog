import { Component } from '@angular/core';
import {Message} from '../../models/message.models';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

  export class ContactFormComponent {

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };
  formSubmitted: boolean | undefined;

  onSubmit(): void {
    console.log(this.newMessage);
  }
}

