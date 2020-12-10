import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const config ={
  baseURL:'localhost:5000'
} as AxiosRequestConfig

const axiosBase = axios.create(config);
const fetchData =  async() => {
  try {
    const fetchUsers = await axiosBase.get('posts')
    console.log(fetchUsers)
    return fetchUsers
  }
  catch(err){
   throw Error(` API リクエストエラー ${err}`)
  }
  

}

fetchData();