
import React from 'react';
import { eventTypes } from '../data/events';
import './EventLegend.css';

const EventLegend = () => {
  return (
    <div className="event-legend-container">
      <div className="event-legend">
        <h3 className="event-legend-title">Event Types</h3>
        <div className="event-legend-items">
          {Object.entries(eventTypes).map(([key, type]) => (
            <div key={key} className="event-legend-item">
              <div 
                className="event-legend-color" 
                style={{ backgroundColor: type.color }}
              ></div>
              <span className="event-legend-label">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventLegend;
