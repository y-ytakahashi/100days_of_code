import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableLane from './components/tableLane'

function App() {

  const timeGridHour = new Array(24).fill("1")

  return (
    <div className="App">
      <table>
        <tbody >
          {
            timeGridHour.map((item:any,key:number) => {
              return (
                <TableLane increment={key}/>
              )
            })
          }
        </tbody>
      </table >
    </div>
  );
}

export default App;
