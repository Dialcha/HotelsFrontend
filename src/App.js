import React from 'react';
import logo from './logo.svg';
import './App.css';
import { today, hotelsData } from './data/data'
import Hero from './components/hero';
import DateFilter from './components/datefilter';
import OptionsFilter from './components/optionsfilter';

function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: '',
    price: 0,
    rooms: 0
    }

    const tamañoHoteles = [
        { value: undefined, name: 'Cualquier tamaño' },
        { value: 10, name: 'Hotel pequeño' },
        { value: 20, name: 'Hotel mediano' },
        { value: 30, name: 'Hotel grande' }
    ]

return (
    <div>
        <Hero filters={filters}/>
        <DateFilter icon='fa-sign-in-alt' date={filters.dateFrom}/>
        <DateFilter icon='fa-sign-out-alt' date={filters.dateTo}/>
        <OptionsFilter options={tamañoHoteles}/>
    </div>
)
}

export default App;
