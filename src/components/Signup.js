import React, { useState } from 'react'







const Signup = ()=> {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')



    return (
        <div>
            <h1>Welcome, please signup below!</h1>
          <form>
            <label>
                Name: <input 
                type='text' 
                placeholder='First and Last' 
                value={name} 
                onChange={(evt)=>{
                    setName(evt.target.value)  
             }} ></input>
            </label>
            <label>
                Email: <input 
                type='email' 
                placeholder='example@email.com' 
                value={email} 
                onChange={(evt)=> {
                    setEmail(evt.target.value)  
             }}></input>
            </label>
            <label>
                Password: <input 
                type='password' 
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
