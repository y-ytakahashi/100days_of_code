// var p = new RegExp('http(s)?://([\\www])')

var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");

console.log(myArray);

// 正規表現を使用するメソッド
var str = "ABCDEFG";
var result = str.match(/[a-z]/gi);
console.log(result);

// 郵便番号の正規表現

var pattern = /^\d{3}-?\d{4}$/g;
var postCode1 = "123-4444";
var postCode2 = "1123-444";
var result1 = postCode1.match(pattern);
var result2 = postCode2.match(pattern);
console.log({ result1 });
console.log({ result2 });


