// 連想配列の要素を順に処理する for ...in

var data = {apple:150, orange:100, banana: 120 }
for (var key in data){
  console.log(`${key} = ${data[key]}`)
}


var data = ['apple','orange','banana'];
Array.prototype.hoge = function(){}
for ( var key in data) {
	console.log(data[key]);
}

/**
 * for ... in 命令では処理の順序も保証されない
 * 仮想変数には、インデックス番号が格納されるだけなので、コードがあまりシンプルにならない
 */