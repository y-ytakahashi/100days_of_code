
// 配列の中に値が含まれるか判定
if(['hello','hej'].includes('hello')){
  console.log(true)
}else{
  console.log(false)
}

// if ture else shorthand 
// long
let test;
const x = 10
if(x > 100){
  test = true

}else {
  test = false
}

console.log(test)

//short
let test2 = ( x > 10 )? true:false;
// or can simple use 
let test3 = x > 10;

console.log({test},{test2},{test3})

// null or undefined ,Empty checks 
const first = null;
// Longhand
if (first !== null || first !== undefined || first !== '') {
    let second = first;
}
// Shorthand
let second = first|| '';
console.log({second})
