import React from 'react'



interface props {
  children: any
}
const tableItem: React.FC<props> = ({ children }) => {
  return (

    <td>
      {children}
    </td>

  )
}

export default tableItem
