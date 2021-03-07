import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation'
import Field from './components/Field'
import MainipulationPanel from './components/ManipulationPanel'
import Button from './components/Button'
import { initFields } from './utils'


const initialPosition = { x: 17, y: 17 };
const initialValue = initFields(35, initialPosition);

const defaultInterval = 100;
const GameStatus = Object.freeze({
  init: 'init',
  playing: 'playing',
  suspended: 'suspended',
  gameover: 'gameover'
})

let timer: any = undefined;
const unsubscribe = () => {
  if (!timer) {
    return
  }
  clearInterval(timer);
}

interface Position {
  x: number;
  y: number;
}

const isCollision = (fieldSize: any, position: Position) => {
  if (position.y < 0 || position.x < 0) {
    return true;
  }

  return false;
}

function App() {

  // initFields で生成した二次元の表で、useState を初期化する
  // state 初期値の宣言は、関数のトップで行う方が可読性が良い
  const [fields, setFields] = useState<any>(initialValue);
  const [position, setPosition] = useState<Position>();
  const [status, setStatus] = useState(GameStatus.init);
  const [tick, setTick] = useState<any>(0);

  useEffect(() => {
    setPosition(initialPosition);
    timer = setInterval(() => {
      // do something
      setTick((tick: number) => tick + 1)
    }, defaultInterval);
    // コンポーネントが削除されるタインミングで実行する関数
    return unsubscribe;
  }, [])


  useEffect(() => {
    if (!position || status !== GameStatus.playing) {
      return
    }
    const canContinue: Function = goUp();
    if (!canContinue) {
      setStatus(GameStatus.gameover);
    }
  }, [tick])

  // start ボタンを押したら playing にステータスを変更する
  const onStart = () => setStatus(GameStatus.playing);

  // Restart
  const onRestart = () => {
    timer = setInterval(() => {
      setTick((tick:number) => tick + 1)
    }, defaultInterval);
    // setDirection(Direction.up);
    setPosition(initialPosition);
    setFields(initFields(35,initialPosition))

  }


  // 前に進む
  const goUp: Function = () => {

    const { x, y } = position as Position;
    const newPosition = { x, y: y - 1 }
    if(isCollision(fields.length, newPosition)){
      unsubscribe();
      return false 
    }
    fields[y][x] = '';
    fields[newPosition.y][x] = 'snake';
    setPosition(newPosition);
    setFields(fields)
    console.log(fields);
    return true
  }

  return (
    <div className="App">
      {/* タイトルとナビゲーション */}
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation />
      </header>

      <main className="main">
        {/* コンテンツ表示領域 */}
        <Field fields={fields} />
      </main>

      <footer className="footer">
        {/* 操作ボタン表示領域 */}
        <Button status={status} onRestart={onRestart} onStart={onStart} />
        <MainipulationPanel />
      </footer>
    </div>
  );
}

export default App;
