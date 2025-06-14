
// src/components/Event/Event.js
import React from 'react';
import { getEventTypeInfo } from '../utils/eventUtils';
import './Event.css';

const Event = ({ event }) => {
  const eventType = getEventTypeInfo(event.type);
  
  return (
    <div 
      className="calendar-event"
      style={{
        backgroundColor: eventType.bgColor,
        borderLeft: `3px solid ${eventType.color}`
      }}
    >
      <div className="calendar-event-title">
        {event.title}
      </div>
      <div 
        className="calendar-event-time"
        style={{ color: eventType.color }}
      >
        {event.time}
      </div>
    </div>
  );
};

export default Event;