//filter 
// 破壊的な変更を加えないためのイミュータブル

// 基本的な考え方として、既に存在するオブジェクトには変更を加えないことを前提とする
// 変更を加える場合は、常に新しいオブジェクトを生成する

var products = [
  {name: 'きゅうり',type:'野菜', quantity:0, price: 1},
  {name: 'バナナ ',type:'フルーツ',quantity:10, price: 15},
  {name: 'セロリ',type:'野菜', quantity:30, price: 9},
  {name: 'オレンジ',type:'フルーツ',quantity:3, price: 5}
]

// for 文で filter を実装
var filterProductsFor = []
for (let i = 0; i < products.length; i++) {
  if(products[i].type === 'フルーツ'){ 
    filterProductsFor.push(products[i]);
  }
}
console.log({filterProductsFor});

// filter を利用して実装
// 配列が１こ１こコールバック関数が渡される
var filterProductsFilter = [];
filterProductsFilter = products.filter(function(product){
  return product.type === 'フルーツ';
})

const rtnProductsArrow = products.filter(product => product.type === 'フルーツ')

console.log({filterProductsFilter})
console.log({rtnProductsArrow})

// 複合条件をfilterで実装
/**
 * 種類が野菜
 * 量が 0 こより多い
 * 値段が10 より小さい
 */
const rtnMultiFilter = products.filter(product => product.type === '野菜'
  && product.quantity > 0 
  && product.price < 10);

  console.log({rtnMultiFilter})

// 数値の配列から 50より大きい数字だけに絞り込んで新しい配列に格納する
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = numbers.filter( number => number > 50);
console.log({filteredNumbers})

// ユーザーオブジェクトの配列から、管理者（admin)をもっているユーザーだけに絞り込む
var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers = users.filter(user => user.admin);
 console.log(filteredUsers);

 //関数が「true」を返却した場合、結果の配列に含まないようにする
 var numbers = [10,20,30];

 // iteratorFunctionの動作について深掘りする
 function reject(array, iteratorFunction) {
  return array.filter( element => !iteratorFunction(element));
}
var lessThanFifteen = reject(numbers,function(number){
  return number > 15;
})
console.log({lessThanFifteen});