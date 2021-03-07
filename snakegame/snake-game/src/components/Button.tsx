import React from 'react'

interface Props {
  status:any
  onStart:VoidFunction
  onRestart:VoidFunction
}
const Button: React.FC<Props> = ({ status,onStart, onRestart }) => {
  return (
    <div className="button">
      {
        status === "gameover"? 
        <button onClick={onRestart}>gameover</button>
        :
        <button onClick={onStart}>start</button>
      }
    </div>

  )
}

export default Button
