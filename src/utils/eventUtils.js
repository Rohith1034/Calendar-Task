import { formatDate } from './dateUtils';
import { eventTypes } from '../data/events';

export const getEventsForDate = (events, date) => {
  const dateStr = formatDate(date);
  return events.filter(event => event.date === dateStr);
};

export const getEventTypeInfo = (type) => {
  return eventTypes[type] || eventTypes.meeting;
};

export const sortEventsByTime = (events) => {
  return events.sort((a, b) => {
    const timeA = a.time.replace(':', '');
    const timeB = b.time.replace(':', '');
    return parseInt(timeA) - parseInt(timeB);
  });
};

export const hasConflictingEvents = (events) => {
  if (events.length < 2) return false;
  
  const sortedEvents = sortEventsByTime([...events]);
  
  for (let i = 0; i < sortedEvents.length - 1; i++) {
    const current = sortedEvents[i];
    const next = sortedEvents[i + 1];
    
    const currentEnd = addMinutesToTime(current.time, current.duration);
    const nextStart = next.time;
    
    if (currentEnd > nextStart) {
      return true;
    }
  }
  
  return false;
};

const addMinutesToTime = (time, minutes) => {
  const [hours, mins] = time.split(':').map(Number);
  const totalMinutes = hours * 60 + mins + minutes;
  const newHours = Math.floor(totalMinutes / 60);
  const newMins = totalMinutes % 60;
  return `${newHours.toString().padStart(2, '0')}:${newMins.toString().padStart(2, '0')}`;
};

export const formatEventTime = (time, duration) => {
  const endTime = addMinutesToTime(time, duration);
  return `${time} - ${endTime}`;
};