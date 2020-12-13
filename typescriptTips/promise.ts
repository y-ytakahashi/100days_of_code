import axios, { AxiosResponse } from 'axios';
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => axios.get(`https://api.github.com/users/${name}`));

const rtsValue = Promise.all(requests)
  .then(responses => {
    // すべてのレスポンスが用意できたら HTTP ステータスコードが見れます
    // for(let response of responses) {
    //   console.log(`${response.data}: ${response.status}`); // 各 url で 200 が表示されます
    // }

    return responses;
  })
  // それぞれの中身を読むために、レスポンスの配列を response.json() の配列にマッピングします
  .then(responses => Promise.all(responses.map(r => r)))
  // すべての JSON応答が解析され、"user" はそれらの配列です。
  .then(users => users.forEach(user => console.log(user)));



  // console.log(rtsValue);





  //Promise api

  /**
   * Promise.resolve 
   * 基本構文
   */
  // async を使った 同期的な処理
  interface fetchData {
    [key:string]:[]
  }
  function fetchAPI(){
    let res = axios.get<{}>(`https://api.github.com/users/iliakan`)
    return 
  }
  interface res {
    data:{}
  }
  const res = fetchAPI();
  console.log(res);

  // axios を使うと戻り値が必ず Promise になるので、扱いにくい、、、、
  // 実際に使う場合は resに帰り型の型を指定して、 Promise.then で値を返す必要がある。
  // 値を返したらそれを state に代入する他なし
const stock_data:Promise<jsonType[]> = ApiGet_Simple("apiのURL").then(result => result.data);
// そこから中身を取り出す処理をしてreactのstateに格納(頑張れば1行で書けそう)
stock_data.then((result => this.setState({ stateVar: result })));