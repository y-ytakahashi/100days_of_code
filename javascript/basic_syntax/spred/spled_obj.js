
let book = { title: 'サンプルブック', publish:'basic javascript', price:'10000'};
console.log(book);

// スプレッド構文を利用し別名で保存
let { title: name, publish: company } = book;
console.log(name);



