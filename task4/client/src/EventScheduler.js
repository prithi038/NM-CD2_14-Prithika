// EventScheduler.js
import React, { useState } from 'react';

function EventScheduler() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleEventSubmit = (e) => {
    e.preventDefault();
    // Handle event submission, e.g., store the event details in your state or send them to a server.
  };

  return (
    <div>
      <h2>Schedule an Event</h2>
      <form onSubmit={handleEventSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </div>
        <div>
          <label>Event Date:</label>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </div>
        <button type="submit">Schedule Event</button>
      </form>
    </div>
  );
}

export default EventScheduler;
