import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { DatePipe } from './services/date-pipe/date.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteEventModalComponent } from './delete-event-modal/delete-event-modal.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CreateEventModalComponent } from './create-event-modal/create-event-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventFullModalComponent } from './event-full-modal/event-full-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    DatePipe,
    HeaderComponent,
    FooterComponent,
    DeleteEventModalComponent,
    RightPanelComponent,
    CreateEventModalComponent,
    EventFullModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
