// 関数シングルトン
const _data = [];

const UserStore = {
  add: item => _data.push(item);
  get: id => _data.find( d => d.id === id);
}

// オブジェクトの変更を凍結するので、 freeze を宣言すると変更できなくなる
Object.freeze(UserStore);
export default UserStore;


// クラス実装のシングルトン

class UserStore2 {
  constructor(){
   if(! UserStore2.instance){
     let data = [];
     UserStore2.instance = this;
   }
   return UserStore2.instance;
  }
 //rest is the same code as preceding example
}
const instance = new UserStore2();
Object.freeze(instance);
