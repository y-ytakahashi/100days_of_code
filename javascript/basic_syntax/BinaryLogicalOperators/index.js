
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

// 論理和判定
const inputUserName = prompt('名前を入力して下さい');
let name = '';

if(inputUserName){
    name = inputUserName;
}else{
    name = 'ゲスト';
}

alert(`こんにちは${name}さん`);
const inputUserName = prompt('名前を入力してください');
const name = inputUserName || 'ゲスト';
alert(`こんにちは${name}さん`);

// ユーザーから名前情報が入力されなかった場合、ゲストと表示する

// 可読性が低いため、初期値を設定する以外で利用することは避けた方が良さげ
// 明確な位置を伝えられる場面では、使っても大丈夫そう




