// async の型推論

function waitThenString(duration: number){
  return new Promise<string>(resolve => {
    setTimeout(() => resolve( `${duration} me passed`),duration)
  })
}

function waitThenNumber(duration: number){
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(duration),duration)
  })
}

// Promise<型指定> で指定することができる

function waitAll() {
  // Promise.all 複数のPromise関数を実行し、全ての結果を得る
  return Promise.all([
    waitThenString(10),
    waitThenString(100),
    waitThenString(1000),
  ])
}

function waitRace(){
  //Promiseクラスのraceメソッドは、複数の非同期処理のうち、いずれかが完了もしくはエラーになった時点で完了処理や例外処理が実行されます。
  return Promise.race([
    waitThenString(10),
    waitThenString(100),
    waitThenString(1000),
  ])
}

async function main(){
  const [a,b,c] = await waitAll();
  const result = await waitRace();
  console.log({a},{b},{c},{result})
}

main()