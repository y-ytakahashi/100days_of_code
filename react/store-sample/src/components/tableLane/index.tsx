import React from 'react'
import Style from './index.module.scss'
import TableItem from '../tableItem'
interface props {
  increment: number
}
const index: React.FC<props> = ({ increment }) => {
  const timeGrid15Min = new Array(4).fill('')
  console.log({ increment })
  return (
    <tr className={Style.tableArea}>
      {
        timeGrid15Min.map((item: any, key: number) => {
          return (
            <td className={Style.tableArea__hour}>
              <div className={Style.tableArea__minute}>

              </div>
              <div className={Style.tableArea__minute}>

              </div>
              <div className={Style.tableArea__minute}>

              </div>
            </td>

          )
        })
      }
    </tr>
  )
}

export default index
