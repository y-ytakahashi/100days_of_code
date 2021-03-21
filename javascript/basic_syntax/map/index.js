// 復習

const numbers = [1,2,3];
let doubleNumbers = [];


doubleNumbers = numbers.map((item) => item * 2)

console.log({doubleNumbers})

// 無名関数を利用して map メソッドを実装
let numberFunction = numbers.map(function(number){
  return number * 2
})

console.log({numberFunction});

