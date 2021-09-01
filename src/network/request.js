import axios from 'axios'


export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // 需要接口的请加coderwhy老师
    baseURL:'http://123.207.32.32:8000/home/multidata',
    timeout:5000
  })
  //2.请求拦截 axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    // consloe.log(config);
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求是，都希望在界面中显示一个请求的图标
    // 3.某些网络请求（比如token），必须携带一些特殊的信息
      return config
    },err=> {
      console.log(err)

  })
  //响应拦截
  instance.interceptors.response.use(result=>{
    return result.data
  },err=> {
    console.log(err)
  })

  // 3.发送真正的网络请求
  return instance(config)
}
