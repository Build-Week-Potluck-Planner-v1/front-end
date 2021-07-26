import React, { useState } from 'react'
import axios from 'axios'
import { reach } from 'yup'
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




function Signup() {



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
        .then(()=> setFormErrors({...formErrors, [name]: '' }))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}


const formSubmit = () =>{
    const newAccount = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim()
    }
    console.log(newAccount)
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
            <div className='errors'>
                <div>{formErrors.name}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.password}</div>
            </div>
          <form className='form-container' onSubmit={(evt)=>{
              evt.preventDefault()
              formSubmit()
          }}>
        <div className='name'>
            <label>
                Name: <input 
                type='text' 
                placeholder='First and Last'
                name='name' 
                value={name} 
                onChange={(evt)=>{
                    setName(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            </label>
        </div>   
        <div className='email'>  
            <label>
                Email: <input 
                type='email' 
                placeholder='example@email.com'
                name='email' 
                value={email} 
                onChange={(evt)=> {
                    setEmail(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            </label>
        </div>
        <div className='password'>  
            <label>
                Password: <input 
                type='password'
                name='password' 
                value={password} 
                onChange={(evt)=> {
                    setPassword(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            </label>
        </div>
            <button>submit</button>

          </form>  
        </div>
    )
}

export default Signup
