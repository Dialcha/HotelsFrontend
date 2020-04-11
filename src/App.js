import React from 'react';
import './App.css';
import { today, hotelsData } from './data/data'
import Hero from './components/hero';
import Filters from './components/filters';

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
        <Filters filters={ filters } />
    </div>
)
}

export default App;
