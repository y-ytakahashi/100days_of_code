// forEach 


const sampleArray = ['aaa','bbb','ccc'];

// 第１引数はコールバック関数
sampleArray.forEach((item)=> console.log(item));


function handlePosts() {
  var posts = [
    { id: 23, title: 'JSニュース' },
    { id: 52, title: 'リファクター・シティ' },
    { id: 105, title: 'Rubyの良いところ' }
  ];
  let savePostFor = [];
  for (var i = 0; i < posts.length; i++) {
    savePostFor.push(posts[i]);
  }
  
  // forEach による書き換え
  let savePostForEach = [];
  posts.forEach((item) => savePostForEach.push(item));
  
  console.log({savePostFor})
  console.log({savePostForEach});


}


handlePosts();


// 画像面積を求める
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];


// for 文を使い面積を求める
var areasFor = [];
for(let i = 0; i < images.length; i++){
  areasFor.push(images[i].height * images[i].width)
}
console.log({areasFor})

// forEach 文を使い面積を求める
var areasForEach = [];
images.forEach((item) => areasForEach.push((item.height * item.width)))
console.log({areasForEach})