import axios from "axios"

const baseApi = axios.create({
   baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1'
})


export const usersData = {

   async getAllUsers (currentPage, limit) {

      try {
         const res = await baseApi.get(`/users?page=${currentPage}&count=${limit}`)
         return res.data
      } catch (error) {
         alert(error.message)
      }
   },

   async getPositionUser () {
      
      try {
         const res = await baseApi.get(`/positions`)
         return res.data.positions
      } catch (error) {
         alert(error.message)
      }
   },

   async addUser (values) {

      const formData = new FormData()
            formData.append('name', values.name); 
            formData.append('email', values.email); 
            formData.append('phone', values.phone)
            formData.append('position_id', values.position); 
            formData.append('photo', values.upload)
      
      const urlToken = await baseApi.get(`/token`)
      const token = urlToken.data.token


      try {
         const newUser = await baseApi.post(`/users`, formData, 
           {
             headers: {
              'Token': token,
                      }
           }
         )
         return newUser
      } catch (error) {
         alert(error.message)
      }
   },

      async getStatus () {

         try {
            const res = await baseApi.get(`/users`)
            return res.data.success
         } catch (error) {
            alert(error.message)
         }
      }  
}