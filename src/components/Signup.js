import React, { useState } from 'react'
import axios from 'axios'
import { reach } from 'yup'
import { formatResultsErrors } from 'jest-message-util'
import schema from '../validation/formSchema'




const initialFormValues = {
    name: '',
    email: '',
    password: '',
}

const initialFormErrors = {
    name: '',
    email: '',
    password: '',

}




function Signup(props) {

const {
    values,
    errors,
    submit,
    change,
} = props


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const postNewAccount = async (newAccount) =>{
    try {
         const response = await axios.post('', newAccount)
            console.log(response)
    }catch(err){
        console.log(err)
    }    
}

const validate = (name, value) => {
    reach(schema, name)
        .validate(value)
        .then(()=> setFormErrors({...formatResultsErrors, [name]:value}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}


const formSubmit = () =>{
    const newAccount = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.email.trim()
    }
    postNewAccount(newAccount)
}

const inputChange = (name, value) =>{
    validate(name, value)
    setFormValues({
        ...formValues, [name]: value
    })
}


    return (
        <div>
            <h1>Welcome, please signup below!</h1>
          <form>
            <label>
                Name: <input 
                type='text' 
                placeholder='First and Last'
                name='name' 
                value={name} 
                onChange={(evt)=>{
                    setName(evt.target.value)  
             }}></input>
            </label>
            <label>
                Email: <input 
                type='email' 
                placeholder='example@email.com'
                name='email' 
                value={email} 
                onChange={(evt)=> {
                    setEmail(evt.target.value)  
             }}></input>
            </label>
            <label>
                Password: <input 
                type='password'
                name='password' 
                value={password} 
                onChange={(evt)=> {
                    setPassword(evt.target.value)  
             }}></input>
            </label>
            <button>submit</button>
          </form>  
        </div>
    )
}

export default Signup
