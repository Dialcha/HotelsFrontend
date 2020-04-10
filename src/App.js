import React from 'react';
import logo from './logo.svg';
import './App.css';
import { today, hotelsData } from './data/data'
import Hero from './components/hero';
import DateFilter from './components/datefilter';

function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: '',
    price: 0,
    rooms: 0
}

return (
    <div>
        <Hero filters={filters}/>
        <DateFilter icon='fa-sign-in-alt'/>
        <DateFilter icon='fa-sign-out-alt'/>
    </div>
)
}

export default App;
