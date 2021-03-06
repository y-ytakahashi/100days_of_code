# SnakeGame作成メモ
#開発/React

自分自身の状態が State 
親から渡ってくる状態が Props 

## React レンダリングの仕組み


Reactでは新しい状態を画面に反映するために、 reducer メソッド
（関数コンポーネントでは関数自体）を実行することでレンダリングを実現している。


この状態遷移とレンダリングの関係から React ではレンダリングが走るタイミングが決まっている。

- props が変更された場合
- state が変更された場合


上記のどちらかのタイミングで再レンダリングが実行される仕組み


React の基本的な考え方

- 状態を元にビューを表現している
- state か props に変更が入ったタイミングでレンダリング（画面更新）が走る



## 状態（ステート）の更新方法

> ステートの更新とともにレンダリングが走るということを覚える



### props の状態を更新する方法（子から親コンポーネントの状態を更新）

実装の中で、親コンポーネントのステート（Props）を更新したい場合は、
setState か、更新フックを含んだ関数を子の関数に渡すことで実現できる。


javascriptでは、慣習的にユーザーからの入力などのイベントが発生した時に実行する関数を
onClick や、onChange など、onXXXX という形式で記述する。

ステートを更新する処理を含んだ関数を子コンポーネントに受け渡す形の実装パターンもよく実装で利用する。



サンプルコード
```jsx
const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const onChangeText = (e) => setValue(e.target.value);
  const add = () => {
    setTodos([...todos, value]);
    setValue('');
  };
  const remove = (targetIndex) => {
    // XXX: Todoの配列から要素を削除する関数を宣言
    setTodos(todos.filter((_item, index) => index !== targetIndex));
  };
  return (
    <div>
      <div>
        <input type="text" value={value} onChange={onChangeText} />
        <button onClick={add}>submit</button>
      </div>
      <TodoList todos={todos} onRemove={remove} />
    </div>
  );
};

const TodoList = ({ todos, onRemove }) => {
  return (
    <ul>
      {todos.map((item, index) => {
        const _onRemove = () => onRemove(index); // XXX: onRemoveを使ってTodoのリストを更新
        return (
          <li key={item} onRemove={_onRemove}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

```

このコードでは、Todo コンポーネントか　TodoList コンポーネントに削除用の setTodos(todo) ステートを
更新する関数を含んだ関数を子コンポーネントに渡して実現している。


スプレッド構文の簡単なおさらい

```jsx
setTodos([...todos,value])
```

配列にスプレッド構文を適用するとその配列自体を展開する形で使用できる。
以下のサンプルと同様に、既存の todos に新しい値を追加するという意味となる。
このスプレッド構文は、React 開発でよく使う構文なので、覚えておくほうが良い。



``` jsx
array = [1,2,3];
newArray = [...array,4]

console.log(newArray);
// => [1,2,3,4] と出力される。

```


## useEffect 

コールバックは基本的に初回レンダリング時および毎回のレンダリング時に実行されるようになっている。





## useCallback

関数の再生性
JavaScript の関数宣言は宣言された自体で新たに関数を生成する。
普通に関数コンポーネント上に関数を宣言して書いておくと、レンダリングの旅に関数が生成されることになる。

これが余分な処理になるので、これを防ぐ仕組みが useCallback となる。


サンプルコード
```jsx
const onChangeDirection = useCallback(
  (newDirection) => {
    if (status !== GameStatus.playing) {
      return;
    }
    if (OppositeDirection[direction] === newDirection) {
      return;
    }
    setDirection(newDirection);
  }, [direction, status]);


```

useCallback も useEffect とおんじような形で依存変数の配列を渡す形になる。
配列で渡してあげた状態が瓦に限り、関数が生成されないようにしてくれる。


## useMemo 
useCallback は関数コンポーネントでレンダリングが起きるたたびに関数が再生性されるのを防ぐ Hooks API の仕組み。


useMemo は　useCallback と使用方法は同じだが、こちらはあくまでも値を保存するために使われる。


``` jsx
const List = ({ list }) => {
  const memoizedList = useMemo(() => {
    return list.filter(((num) => num % 2 === 0)
  }, [list]);
  return (
    <ul>
      {
        memoizedList.map(num => {
          return <li>{num}</li>
        })
      }
    </ul>
  )
}

```

この配列が十分に大きい場合レンダリングのたびに再計算をするのはコストがかかるので、useMemo を使い、
list が更新されたときだけ、 memoizedList を再計算し直すようにする。


## addEventLisner の勘所

eventLisner はリソースの無駄遣いを防ぐ観点から、 removeEventLisner を使ってイベント登録を解除してあげないといけない。

今回の例だと、useEffect の return (unmount) と同じ要領で、イベントクリーン用の関数を渡している。


```jsx
useEffect(() => {
  const handleKeyDown = (e) => {
    const newDirection = DirectionKeyCodeMap[e.keyCode];
    if (!newDirection) {
      return;
    }

    onChangeDirection(newDirection);
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [onChangeDirection]);

```



このクリーン関数が実行されるタイミング

1. コンポーネントがレンダリングされる
2. １回目の useEffect のコールバックが実行される
3. status か direction が変わる
4. １回目のクリーン関数がよばれ、イベントが解除される
5. ２回目のイベントが登録される












