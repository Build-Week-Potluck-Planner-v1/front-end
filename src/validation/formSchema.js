import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required.')
        .min(3, 'Username must contain at least 3 characters.'),
    
    password: yup
        .string()
        .required('Password is required.')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    code: yup
        .string()
        .required('Planner code is required.')
        .min(4, 'Code must be 4 numbers')
        
        
       
}) 

export default formSchema