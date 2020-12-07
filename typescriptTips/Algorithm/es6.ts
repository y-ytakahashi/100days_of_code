// template Literals
const myName = "jon";
const msg = `hello ${myName}`;
console.log(msg);

// ES5
const isEvent = function (num) {
  return num % 2 === 0;
};

//ES6
const isEvent2 = (num) => num % 2 === 0;

console.log(isEvent(6), isEvent2(4));

// use build-in function
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 配列の中から奇数を抽出する
const odds = nums.filter((n) => n % 2 === 1);
console.log({ nums });
console.log({ odds });

// 中身を評価
const mapOdds = nums.map((item) => item % 2 === 0);
console.log({ mapOdds });

// arrow function this

const person = {
  name: "myname",
  hobby: "programing",
  callLate: async function () {
    await setTimeout(() => {
      console.log("趣味は" + this.hobby);
    }, 1000);
  },
  sayHello: async () => {
    await setTimeout(() => {
      console.log("Say Hi");
    }, 2000);
  },
};

person.sayHello().then((data) => {
  console.log(data);
});
