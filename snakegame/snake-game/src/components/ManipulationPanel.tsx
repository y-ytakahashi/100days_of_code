import React from 'react'
interface Props {
  onChange: Function
}
const ManipulationPanel: React.FC<Props> = ({ onChange }) => {
  const onUp = () => onChange('up')
  const onRight = () => onChange('right')
  const onLeft = () => onChange('left')
  const onDown = () => onChange('down')

  return (
    <div>
      <div className="mainipulation-panel"></div>
      <button onClick={onLeft}>←</button>
      <button onClick={onUp}>↑</button>
      <button onClick={onDown}>↓</button>
      <button onClick={onRight}>→</button>
    </div>
  )
}

export default ManipulationPanel
