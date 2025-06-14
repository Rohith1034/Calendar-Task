export const events = [
  {
    id: 1,
    title: "Team Standup",
    date: "2025-06-15",
    time: "09:00",
    duration: 30,
    type: "meeting",
    attendees: 8,
    description: "Daily team sync meeting",
    location: "Conference Room A"
  },
  {
    id: 2,
    title: "Product Review",
    date: "2025-06-15",
    time: "14:00",
    duration: 60,
    type: "review",
    attendees: 5,
    description: "Quarterly product review",
    location: "Main Hall"
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "2025-06-18",
    time: "10:30",
    duration: 90,
    type: "presentation",
    attendees: 12,
    description: "Q2 results presentation",
    location: "Boardroom"
  },
  {
    id: 4,
    title: "Code Review Session",
    date: "2025-06-20",
    time: "15:00",
    duration: 45,
    type: "review",
    attendees: 6,
    description: "Weekly code review",
    location: "Dev Room"
  },
  {
    id: 5,
    title: "Sprint Planning",
    date: "2025-06-22",
    time: "09:30",
    duration: 120,
    type: "planning",
    attendees: 10,
    description: "Sprint 15 planning session",
    location: "Conference Room B"
  },
  {
    id: 6,
    title: "Design Workshop",
    date: "2025-06-25",
    time: "13:00",
    duration: 180,
    type: "workshop",
    attendees: 15,
    description: "UX/UI design workshop",
    location: "Creative Space"
  },
  {
    id: 7,
    title: "1:1 Meeting",
    date: "2025-06-13",
    time: "11:00",
    duration: 30,
    type: "meeting",
    attendees: 2,
    description: "Manager 1:1 meeting",
    location: "Office"
  },
  {
    id: 8,
    title: "All Hands Meeting",
    date: "2025-06-27",
    time: "16:00",
    duration: 60,
    type: "meeting",
    attendees: 50,
    description: "Monthly all hands meeting",
    location: "Main Auditorium"
  }
];

export const eventTypes = {
  meeting: {
    label: 'Meetings',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.3)'
  },
  review: {
    label: 'Reviews',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.3)'
  },
  presentation: {
    label: 'Presentations',
    color: '#22c55e',
    bgColor: 'rgba(34, 197, 94, 0.1)',
    borderColor: 'rgba(34, 197, 94, 0.3)'
  },
  planning: {
    label: 'Planning',
    color: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: 'rgba(249, 115, 22, 0.3)'
  },
  workshop: {
    label: 'Workshops',
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.1)',
    borderColor: 'rgba(236, 72, 153, 0.3)'
  }
};