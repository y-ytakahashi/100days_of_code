import { combineReducers } from 'redux'
import counterSlice from '../domain/counterSlice'

const reducer = combineReducers({
// 生成した Reducer をインポート
counterSlice

})

export default reducer