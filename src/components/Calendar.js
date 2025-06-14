import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventLegend from './EventLegend';
import { useCalendar } from '../hooks/useCalendar';
import './Calendar.css';

const Calendar = () => {
  const {
    currentDate,
    today,
    calendarData,
    events,
    navigateMonth,
    goToToday
  } = useCalendar();

  return (
    <div className="calendar-container">
      <CalendarHeader
        currentDate={currentDate}
        eventsCount={events.length}
        onNavigate={navigateMonth}
        onToday={goToToday}
      />
      
      <CalendarGrid
        calendarData={calendarData}
        currentDate={currentDate}
        today={today}
        events={events}
      />
      
      <EventLegend />
    </div>
  );
};

export default Calendar;