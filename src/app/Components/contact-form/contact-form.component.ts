import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  readonly #fb = inject(FormBuilder)
  readonly contactForm = this.#fb.group({
      lastname: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
      firstname: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required, Validators.minLength(20)]],
    }
  );

  formSubmitted: boolean | undefined;

  onSubmit(): void {
    console.log(this.contactForm.getRawValue());
  }
}

