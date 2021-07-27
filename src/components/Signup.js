import React, { useState } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'
import { reach } from 'yup'
import schema from '../validation/formSchema'
import { postAccount } from '../store/actions/index';

const initialFormValues = {
    username: '',
    password: '',
    code: '',
}

const initialFormErrors = {
    username: '',
    password: '',
    code: '',
}

function Signup(props) {
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const validate = (name, value) => {
        reach(schema, name)
            .validate(value)
            .then(()=> setFormErrors({...formErrors, [name]: '' }))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }


    const formSubmit = (event) =>{
        event.preventDefault();
        const newAccount = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
            code: formValues.code.trim(),
        }
        props.postAccount(newAccount);
    }

    const inputChange = (name, value) =>{
        validate(name, value)
        setFormValues({
            ...formValues, [name]: value
        })
    }

    function validateNumbers(evt) {
        var theEvent = evt || window.event;
    
        // Handle paste
        if (theEvent.type === 'paste') {
            key = evt.clipboardData.getData('text/plain');
        } else {
        // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    return (
        <div>
            <h1>Welcome, please signup below!</h1>
            <div className='errors'>
                <div>{formErrors.username}</div>
                <div>{formErrors.password}</div>
                <div>{formErrors.code}</div>
            </div>
    <form className='form-container' onSubmit={formSubmit}>
        <div className='username'>
            <label>
                Username: <input 
                type='text' 
                placeholder='Please enter username'
                name='username' 
                value={username} 
                onChange={(evt)=>{
                    setName(evt.target.value)
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
        <div className='planner-code'>  
            <label>
                Planner Code: <input 
                type='text'
                placeholder='Please enter a 4 digit code'
                onKeyPress={(evt)=>{
                    validateNumbers(evt)
                }}
                minLength='4'
                maxLength='4'
                required
                name='code' 
                value={code} 
                onChange={(evt)=> {
                    setCode(evt.target.value)
                    inputChange(evt.target.name, evt.target.value) 
                    
             }}></input>
            </label>
        </div>
            <button>submit</button>

          </form>  
        </div>
    )
}

export default connect(null, {postAccount})(Signup)
