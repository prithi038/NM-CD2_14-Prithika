import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set your root element ID

function EventDialog({ isOpen, onRequestClose, onSaveEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSave = () => {
    // Validate event input and save event
    if (eventName && eventDate) {
      onSaveEvent({ name: eventName, date: eventDate });
      setEventName('');
      setEventDate('');
    }
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Event"
    >
      <h2>Add Event</h2>
      <label>
        Event Name:
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </label>
      <label>
        Event Date:
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </Modal>
  );
}

export default EventDialog;
