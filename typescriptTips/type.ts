//Map In TypeScript
// Type と Interface の違い
/**
 * Interface オブジェクトや関数、クラス仕様を定めるもの
 * Type 複数の場所で再利用しようと思っている型に対して名前をつけるためのもの
 */

 // IPerson の要素を宣言
 interface IPerson {
  name:string;
  age:number;
  gender:string
}

type MyMapLikeType = Record<string, IPerson>;
const peopleA: MyMapLikeType = {
    "a": { name: "joe",age:24,gender:"male" },
    "b": { name: "joe",age:24,gender:"Female" },
};


// Interface の拡張
interface IPerson2 extends IPerson {
  job:string;
  department:string;
}
// Record は map 型を定義するときに利用する
type MyMapLikeType2 = Record<string, IPerson2>;
const peopleB: MyMapLikeType2 = {
    "c": { name: "joe",age:24,gender:"male",job:"office worker",department:"system development"},
    "d": { name: "joe",age:24,gender:"Female",job:"office worker",department:"call center" },
};
