import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ onNavigate, onToday }) => {
  return (
    <div className="navigation-controls">
      <button
        onClick={() => onNavigate(-1)}
        className="nav-button"
        aria-label="Previous month"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={onToday}
        className="today-button"
      >
        Today
      </button>
      <button
        onClick={() => onNavigate(1)}
        className="nav-button"
        aria-label="Next month"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Navigation;