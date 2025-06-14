import { useState, useMemo } from 'react';
import { getCalendarDays } from '../utils/dateUtils';
import { events } from '../data/events';

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const calendarData = useMemo(() => {
    return getCalendarDays(currentDate);
  }, [currentDate]);

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const goToDate = (date) => {
    setCurrentDate(new Date(date));
  };

  return {
    currentDate,
    today,
    calendarData,
    events,
    navigateMonth,
    goToToday,
    goToDate
  };
};