import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event-service/event.service';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css'],
})
export class CreateEventModalComponent implements OnInit {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() createdModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Input() eventInput?: Event;
  eventId?: number;

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

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    if (this.eventInput) {
      this.eventId = this.eventInput.id;

      const event = this.eventInput;

      this.eventForm.patchValue({
        title: event.title,
        price: event.price,
        description: event.description,
        address: {
          street: event.address.street,
          immobileNumber: event.address.immobileNumber,
          city: event.address.city,
          postalCode: event.address.postalCode,
        },
        timeInterval: {
          startTime: event.timeInterval.startTime,
          endTime: event.timeInterval.endTime,
        },
        capacity: {
          maxCapacity: event.capacity.maxCapacity,
        },
      });
    }
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const event: Event = {
        title: this.eventForm.get('title')?.value,
        price: this.eventForm.get('price')?.value,
        description: this.eventForm.get('description')?.value,
        address: {
          street: this.eventForm.get('address.street')?.value,
          immobileNumber: this.eventForm.get('address.immobileNumber')?.value,
          city: this.eventForm.get('address.city')?.value,
          postalCode: this.eventForm.get('address.postalCode')?.value,
        },
        timeInterval: {
          startTime: this.eventForm.get('timeInterval.startTime')?.value,
          endTime: this.eventForm.get('timeInterval.endTime')?.value,
        },
        capacity: {
          maxCapacity: this.eventForm.get('capacity.maxCapacity')?.value,
        },
      };

      this.eventService.createEvent(event).subscribe(
        (response) => {
          console.log(response);
          this.createdModalEvent.emit();
        },
        (error) => {
          console.error(error);
        }
      );
    }
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
