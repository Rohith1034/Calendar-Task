import React from 'react';
import Event from './Event';
import { isToday, isCurrentMonth } from '../utils/dateUtils';
import { getEventsForDate } from '../utils/eventUtils';
import './CalendarDay.css';

const CalendarDay = ({ date, currentDate, today, events }) => {
  const dayEvents = getEventsForDate(events, date);
  const isCurrentDay = isToday(date);
  const isInCurrentMonth = isCurrentMonth(date, currentDate);

  const dayClasses = [
    'calendar-day',
    !isInCurrentMonth && 'calendar-day--other-month',
    isCurrentDay && 'calendar-day--today'
  ].filter(Boolean).join(' ');

  return (
    <div className={dayClasses}>
      <div className="calendar-day-header">
        <div className="calendar-day-number">{date.getDate()}</div>
        {isCurrentDay && (
          <div className="calendar-day-today-badge">Today</div>
        )}
      </div>
      
      <div className="calendar-day-events">
        {dayEvents.slice(0, 3).map(event => (
          <Event key={event.id} event={event} />
        ))}
        {dayEvents.length > 3 && (
          <div className="calendar-day-more-events">
            +{dayEvents.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;