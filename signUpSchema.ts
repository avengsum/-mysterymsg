import {z} from 'zod'

export const usernameValidation = z.string()
.min(2,'Username must at least 2 characters')
.max(20,'Username must be no more than 20 characters')

export const signUpSchema = z.object({
  username:usernameValidation,
  email:z.string(),
  password:z.string().min(6,{message:"password must be at least 6 characters"})
})