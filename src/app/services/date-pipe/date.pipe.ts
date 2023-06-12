import { Pipe, PipeTransform } from '@angular/core';
import { TimeInterval } from 'src/app/interfaces/time-interval';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(timeInterval: TimeInterval): string {
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const startDate = new Date(timeInterval.startTime).toLocaleString(
      'en-US',
      dateOptions
    );
    const endDate = new Date(timeInterval.endTime).toLocaleString(
      'en-US',
      dateOptions
    );
    return `${startDate} - ${endDate}`;
  }
}
