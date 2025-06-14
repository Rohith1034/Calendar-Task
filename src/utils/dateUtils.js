export const formatMonth = (date) => {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export const formatDate = (date) => {
  return date.toISOString().split('T')[0];
};

export const isToday = (date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

export const isSameMonth = (date1, date2) => {
  return date1.getMonth() === date2.getMonth() && 
         date1.getFullYear() === date2.getFullYear();
};

export const isCurrentMonth = (date, currentDate) => {
  return date.getMonth() === currentDate.getMonth();
};

export const getCalendarDays = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  const startDate = new Date(firstDay);
  startDate.setDate(firstDay.getDate() - firstDay.getDay());
  
  const days = [];
  const currentDay = new Date(startDate);
  
  for (let i = 0; i < 42; i++) {
    days.push(new Date(currentDay));
    currentDay.setDate(currentDay.getDate() + 1);
  }
  
  return { days, firstDay, lastDay };
};

export const getWeekDays = () => {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};