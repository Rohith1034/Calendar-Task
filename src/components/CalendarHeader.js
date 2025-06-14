import React from 'react';
import { Calendar } from 'lucide-react';
import Navigation from './Navigation';
import { formatMonth } from '../utils/dateUtils';
import './CalendarHeader.css';

const CalendarHeader = ({ currentDate, eventsCount, onNavigate, onToday }) => {
  return (
    <div className="calendar-header">
      <div className="calendar-header-content">
        <div className="calendar-header-left">
          <div className="calendar-icon-container">
            <Calendar size={24} color="white" />
          </div>
          <div className="calendar-title-container">
            <h1 className="calendar-title">{formatMonth(currentDate)}</h1>
            <p className="calendar-subtitle">{eventsCount} events this month</p>
          </div>
        </div>
        
        <Navigation onNavigate={onNavigate} onToday={onToday} />
      </div>
    </div>
  );
};

export default CalendarHeader;