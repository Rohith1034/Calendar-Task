import React from 'react';
import CalendarDay from './CalendarDay';
import { getWeekDays } from '../utils/dateUtils';
import './CalendarGrid.css';

const CalendarGrid = ({ calendarData, currentDate, today, events }) => {
  const weekDays = getWeekDays();

  return (
    <div className="calendar-grid-container">
      {/* Days of week header */}
      <div className="calendar-week-header">
        {weekDays.map(day => (
          <div key={day} className="calendar-week-day">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="calendar-grid">
        {calendarData.days.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            currentDate={currentDate}
            today={today}
            events={events}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;