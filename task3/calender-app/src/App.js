import React from 'react';
//import EventScheduler from './EventScheduler';
import { useEffect } from 'react';
import 'jquery';
import $ from 'jquery';
import 'evo-calendar';
import './App.css';

function App() {
  
  useEffect(() => {
    const initializeCalendar = () => {
      const calendar = $('#calendar'); // Use jQuery selector
      calendar.evoCalendar({
        theme: 'Midnight Blue',
        // Add more configuration options here if needed
      });
    };
    initializeCalendar();
  }, []);

  return (
    <div>
        <div className="hero" ></div>
        <div id="calendar"></div>

        
        
    </div>
  );
}


export default App;
