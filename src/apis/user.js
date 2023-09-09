import request from '@/utils/http.js'
export const loginAPI = ({ account, password}) => { 
   return request({
     url: '/login',
     method: 'POST',
     data: {
       account,
       password
     }
   })
}