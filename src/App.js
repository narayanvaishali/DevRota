import React from 'react';
import Table from './components/Table';
import './App.css';

const materials = [{
  day: '4',
  name: 'TT',
  shift_AM: 'H',
  shift_PM: 'H',
}, {
  day: '4',
  name: 'VP',
  shift_AM: 'H',
  shift_PM: 'H',
}, {
  day: '4',
  name: 'CM',
  shift_AM: 'H',
  shift_PM: 'A',
}, {
  day: '4',
  name: 'KT',
  shift_AM: 'O',
  shift_PM: 'O',
}, {
  day: '4',
  name: 'TA',
  shift_AM: 'O',
  shift_PM: 'H',
}, {
  day: '10',
  name: 'TT',
  shift_AM: 'O',
  shift_PM: 'O',
}, {
  day: '10',
  name: 'VP',
  shift_AM: 'H',
  shift_PM: 'H',
}, {
  day: '10',
  name: 'CM',
  shift_AM: 'H',
  shift_PM: 'H',
}, {
  day: '10',
  name: 'KT',
  shift_AM: 'A',
  shift_PM: 'A',
}, {
  day: '10',
  name: 'TA',
  shift_AM: 'O',
  shift_PM: 'O',
}];

const App = () => (
  <div className="App">
    <div>
      <Table data={materials} />
    </div>
  </div>
);


export default App;
