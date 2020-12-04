const peopleArray = [
  { id: 123, name: "dave", age: 23 },
  { id: 456, name: "chris", age: 23 },
  { id: 789, name: "bob", age: 23 },
  { id: 101, name: "tom", age: 23 },
  { id: 102, name: "tim", age: 23 }
]

// map 型で 特定の要素を検索する方法
/**
 * id で検索条件を絞り検索を実施するために
 * @param {} array 
 */
const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     // get obj one by one 
     console.log("obj",obj)

     console.log("item",item)

     obj[item.id] = item
     return obj
   }, {})

const idToSelect = "789";

// オブジェクト内のIDをキーとして {key:{values}} のオブジェクトを生成する
const peopleObject = arrayToObject(peopleArray)

// IDを指定してmap 内を検索する
console.log(peopleObject[idToSelect])
console.log(peopleObject)
console.log(typeof(peopleObject))


const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
names.reduce((item,obj,) => {
  console.log("obj",obj)
  console.log("item",item)
  return obj
},{})