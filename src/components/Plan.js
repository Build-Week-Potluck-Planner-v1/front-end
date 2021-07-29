import React, {useState} from 'react'
import { connect } from 'react-redux'
import {createPotluck} from '../store/actions/index'
import { useHistory } from 'react-router-dom'

function Plan(props) {
    const initialValues = {
        name: '',
        date: '',
        time: '',
        location: '',
    }
    const [potluck, setPotluck] = useState(initialValues)
    const history = useHistory();

    const changeHandler = (e) => {
        setPotluck({...potluck, [e.target.name]: e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        props.createPotluck(potluck);
        setPotluck(initialValues)
        setTimeout(() => {    
            history.push('/dashboard')
        }, 500)
    }

    return (
        <div>
            <h1>PLAN A POTLUCK</h1>
            <form onSubmit = {submitHandler}>
                <label>Name of Event
                    <input 
                        name = 'name'
                        type = 'name'
                        placeholder = 'Name your event'
                        onChange = {changeHandler}
                    />
                </label>
                <label>Date
                    <input 
                        name = 'date'
                        type = 'date'
                        placeholder = 'What date should it take place?'
                        onChange = {changeHandler}
                    />
                </label>
                <label>Time
                    <input 
                        name = 'time'
                        type = 'time'
                        placeholder = 'Type in a time you want it to start'
                        onChange = {changeHandler}
                    />
                </label>
                <label>Location
                    <input 
                        name = 'location'
                        type = 'location'
                        placeholder = 'Where should it be'
                        onChange = {changeHandler}
                    />
                </label>
                <button>Submit</button>
                <h2>{props.successMessage}</h2>
            </form>
        </div>
    )
}

export default connect(null, {createPotluck})(Plan)
