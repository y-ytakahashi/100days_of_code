// 配列などを順に処理する
/**
 * for( 仮変数 of 列挙可能なオブジェクト){
 *  ループ内で実行する命令（群）
 * }
 */

// for ..in と for ..of の違い
var data = ['apple','orange','banana'];
console.log('--- for in ---')
Array.prototype.hoge = function(){}
for ( var key in data) {
	console.log(data[key]);
}


console.log('--- for of ---')
for ( var value of data) {
	console.log(value);
}

/**
 * for .. in では仮変数にキー名（インデックス番号）が渡されていたのに対して、
 * for ..of では値を列挙している
 */


// 変数 i を 1 ~ 100 の間で加算していき、合計値が1000 を超えたところでループを終了
let sum = 0;
for (let i = 0; i< 1000; i++){
  sum += i;
  if(sum > 1000){
    console.log(`合計値が1000を超えるのは ${i}回目`);
    break
  }
}
console.log({sum});

// 変数 i を 1 ~ 100 の間で奇数のみ加算し、その合計値を求める
let sumOddResult = 0;
for( let i =0; i < 100; i++){ 
  // 2で割り切れる時に処理をスキップする
  if( i % 2 === 0){ continue }
  sumOddResult += i
}
console.log({sumOddResult});





