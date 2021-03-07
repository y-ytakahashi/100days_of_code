import React from 'react'
interface Props {
  fields: any
}
const Field: React.FC<Props> = ({ fields }) => {
  return (
    <div className="field">
      {
        // new Array(35 * 35).fill('').map(() => <div className="dots"></div>)
        fields.map((row:any) => {
          return row.map((column: any) => {
            return <div className={`dots ${column}`}></div>
          })
        })
      }
    </div>
  )
}

export default Field
