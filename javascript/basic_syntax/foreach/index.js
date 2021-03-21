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