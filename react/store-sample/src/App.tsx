import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableLane from './components/tableLane'
import Style from './index.module.scss'
function App() {

  const timeGridHour = new Array(24).fill("1")
  const viewDateCol = ['2021-03-01', '2021-03-02', '2021-03-03']
  return (
    <div className="App">
      <div>
        サンプル時刻表
      </div>
      <table className={Style.calendar}>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <tbody >
          {
            viewDateCol.map((item: any) => {
              return (
                <td className={Style.dateColum}>
                  {item}
                  <div>
                    memo
                  </div>
                  {
                    timeGridHour.map((item: any, key: number) => {
                      return (
                        <TableLane increment={key} />
                      )
                    })
                  }
                </td>
              )
            })
          }
        </tbody>
      </table >
    </div>
  );
}

export default App;
