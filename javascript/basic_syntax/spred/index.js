
let book = { title: 'サンプルブック', publish:'basic javascript', price:'10000'};
console.log(book);

// スプレッド構文を利用し別名で保存
let { title: name, publish: company } = book;
console.log(name);


// ショートカット演算子

let x = 1;
//if文を使った場合
if( x === 1){console.log('this true' )}

//ショートカット演算子を使った場合
x === 1 && console.log('this true')





