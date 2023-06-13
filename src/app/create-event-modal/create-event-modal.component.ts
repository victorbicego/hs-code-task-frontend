import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css'],
})
export class CreateEventModalComponent {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  eventForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    price: [null, Validators.required],
    description: [''],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      immobileNumber: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
    }),
    timeInterval: this.formBuilder.group({
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
    }),
    capacity: this.formBuilder.group({
      maxCapacity: [null, Validators.required],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  onSubmit(): void {
    this.eventForm.reset();
  }

  validate(): boolean {
    const address = this.eventForm.get('address');
    const capacity = this.eventForm.get('capacity');
    const timeInterval = this.eventForm.get('timeInterval');

    return (
      this.eventForm.valid &&
      this.eventForm.get('title')?.value !== '' &&
      this.eventForm.get('price')?.value !== null &&
      address?.get('street')?.value !== '' &&
      address?.get('immobileNumber')?.value !== '' &&
      address?.get('city')?.value !== '' &&
      address?.get('postalCode')?.value !== '' &&
      capacity?.get('maxCapacity')?.value !== null &&
      timeInterval?.get('startTime')?.value !== null &&
      timeInterval?.get('endTime')?.value !== null
    );
  }
}
