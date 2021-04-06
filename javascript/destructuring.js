
// オブジェクトの分割代入
const savedFile = {
  extension: "jpg",
  name: "profile",
  size: 14040,
};

function fileSummary({ name, extension, size }) {
  return `${name}.${extension}の容量は${size}です。`;
}

console.log(fileSummary(savedFile));

// 配列に対しての分割代入
const companies = ["Google", "FaceBook", "Uber"];

// Good
const [name1] = companies;
const firstCompany = companies[0];
console.log({ name1 }, { firstCompany });

const [restName, ...rest] = companies;
console.log({ restName }, ...rest);

// オブジェクトの分割代入と、配列の分割代入を組み合わせる

const companies1 = [
  { name: "Google", location: "マウンテンビュー" },
  { name: "FaceBook", location: "メロンパーク" },
  { name: "Uber", location: "サンフランシスコ" },
];

// const location = companies1[0].location;
// console.log({location})

const [{ location }] = companies1;
console.log({ location });

const Google = {
  locations: ["マウンテンビュー", "ニューヨーク", "ロンドン"],
};

// const { locations } = Google;
// const [first] = locations;

const {
  locations: [first],
} = Google;
const [first] = locations;
console.log({first})