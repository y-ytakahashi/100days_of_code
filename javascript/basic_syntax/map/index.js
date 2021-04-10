;// 復習

const numbers = [1,2,3];
let doubleNumbers = [];


// アロー関数を利用して map メソッドを実装
doubleNumbers = numbers.map((item) => item * 2)
console.log({doubleNumbers})

// 無名関数を利用して map メソッドを実装
let numberFunction = numbers.map(function(number){
  return number * 2
})

console.log({numberFunction});

// Object から特定の要素を取得する
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;
heights = images.map(image => image.height);
console.log({heights})

// 移動速度を求める
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;
speeds = trips.map(item => item.distance / item.time);
console.log(speeds);

// 渡したプロパティの値だけを返却する関数を実装

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];
var colorNames = colorObjects.map(item => item['color']);
console.log({colorNames})