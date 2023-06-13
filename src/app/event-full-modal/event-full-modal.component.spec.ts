import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFullModalComponent } from './event-full-modal.component';

describe('EventFullModalComponent', () => {
  let component: EventFullModalComponent;
  let fixture: ComponentFixture<EventFullModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFullModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFullModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
