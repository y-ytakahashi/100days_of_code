import React, { useEffect, useState, useCallback } from 'react';
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

const Direction = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

const OppitionsDirection: any = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

const DirectionKeyCodeMap: any = Object.freeze({
  37: Direction.left,
  38: Direction.up,
  39: Direction.right,
  40: Direction.down
})

const Delta: any = Object.freeze({
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  down: { x: 0, y: 1 },
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
  const [direction, setDirection] = useState<any>(Direction.up);

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
    const canContinue: Function = handleMoving();
    if (!canContinue) {
      setStatus(GameStatus.gameover);
    }
  }, [tick])

  // start ボタンを押したら playing にステータスを変更する
  const onStart = () => setStatus(GameStatus.playing);

  // Restart
  const onRestart = () => {
    timer = setInterval(() => {
      setTick((tick: number) => tick + 1)
    }, defaultInterval);
    setStatus(GameStatus.init);
    setDirection(Direction.up);
    setPosition(initialPosition);
    setFields(initFields(35, initialPosition));

  }


  // 前に進む
  const handleMoving: Function = () => {

    const { x, y } = position as Position;
    console.log({ direction })
    const delta = Delta[direction];
    console.log({ delta })
    const newPosition: Position = {
      x: x + delta.x,
      y: y + delta.y
    }
    if (isCollision(fields.length, newPosition)) {
      unsubscribe();
      return false
    }
    fields[y][x] = '';
    fields[newPosition.y][newPosition.x] = 'snake';
    setPosition(newPosition);
    setFields(fields)
    console.log(fields);
    return true
  }

  const onChangeDirection = useCallback((newDirection: any) => {
    if (status !== GameStatus.playing) {
      return direction;
    }
    if (OppitionsDirection[direction] === newDirection) {
      return
    }
    setDirection(newDirection)
  }, [direction, status])

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      const newDirection = DirectionKeyCodeMap[e.keyCode];
      if (!newDirection) {
        return;
      };
      onChangeDirection(newDirection);
    };
    document.addEventListener('keydown',handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  },[onChangeDirection])

  console.log('direction', direction);
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
        <MainipulationPanel onChange={onChangeDirection} />
      </footer>
    </div>
  );
}

export default App;
