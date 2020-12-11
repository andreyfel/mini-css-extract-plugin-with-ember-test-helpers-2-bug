import { modifier } from 'ember-modifier';
import { Calendar } from '@fullcalendar/core';

export default modifier(function fullCalendar(element/*, params, hash*/) {
  new Calendar(element);
});
