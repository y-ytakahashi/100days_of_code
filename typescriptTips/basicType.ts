
// 型指定の方法
const twice = (count:number):string => {
  return `2倍すると${count * 2} です`
}
console.log(twice(4));


// never 消して何も返さない
// 例外を発生させる時などの型指定
let err = (message:string):never => {
  throw new Error(message)
}


// object in array 
type array1 {
  [key:string]: string | number
}
let arrayObject: Array<{[key:string]: string | number}>
let arrayObject2:array1 = {
  key:1,
  value:"something"
};