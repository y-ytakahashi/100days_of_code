import React from 'react'
import Style from './index.module.scss'
import TableItem from '../tableItem'
interface props {
  increment: number
}
const index: React.FC<props> = ({ increment }) => {
  const timeGrid15Min = new Array(3).fill('')
  console.log({increment})
  return (
      <tr className={Style.tableArea}>
        {
          timeGrid15Min.map((item:any,key:number) => {
            return (
              <td>
                <div>
                  データ{key}:{increment}
                </div>
              </td>

            )
          })
        }
      </tr>
  )
}

export default index
