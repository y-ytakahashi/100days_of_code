// rest 演算子
/**
 * 引数として渡されたものを配列として受け取る
 * （受け取った引数を配列としてまとめて関数の引数として利用できる）
 */

function addNumbers(...number) {
  return number.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6);

// spread 演算子
const defaultColor = ["赤", "緑"];
const userFavoriteColors = ["オレンジ", "黄色"];
const fallColors = ["茶", "紅葉"];

// 配列として展開
console.log([...defaultColor, ...userFavoriteColors, ...fallColors]);
// --> [ '赤', '緑' ]

// オブジェクトとして展開
console.log({ ...defaultColor }, { ...userFavoriteColors }, { ...fallColors });
// --> { '0': '赤', '1': '緑' }

function validateShoppingList(...items) {
  if (items.indexOf("牛乳") < 0) {
    return ["牛乳", ...items];
  }
  return items;
}

console.log(validateShoppingList("オレンジ", "パン"));

// rest 演算子の実装

const MathLibrary = {
  calculateProduct(...rest) {
    // return a * b;
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },

};

console.log(MathLibrary.calculateProduct(2,3,3))