import React, { useState } from 'react'
import axios from 'axios'
import { reach } from 'yup'
import schema from '../validation/formSchema'

const initialFormValues = {
    username: '',
    password: '',
    
}

const initialFormErrors = {
    username: '',
    password: '',
    

}

function Signup() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const postNewAccount = async (newAccount) =>{
    try {
         const response = await axios.post('https://ft-potluck-planner-7-server.herokuapp.com/api/auth/register', newAccount)
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
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        
        
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
                <div>{formErrors.username}</div>
                <div>{formErrors.password}</div>
                
            </div>
          <form className='form-container' onSubmit={(evt)=>{
              evt.preventDefault()
              formSubmit()
          }}>
        <div className='username'>
            <label>
                Username: <input 
                type='text' 
                placeholder='Please enter username'
                name='username' 
                value={username} 
                onChange={(evt)=>{
                    setUsername(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            </label>
        </div>   
        
        <div className='password'>  
            <label>
                Password: <input 
                type='password'
                placeholder='********'
                name='password' 
                value={password} 
                onChange={(evt)=> {
                    setPassword(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            </label>
        </div>
        
            <button id='button'>submit</button>

          </form>  
        </div>
    )
}

export default Signup
