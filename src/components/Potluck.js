import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'
import {postInvites} from '../store/actions/index'

function Potluck(props) {
    const {potlucks, postInvites} = props
    const stringId = useParams();
    const id = parseInt(stringId.id);
    const potluck = potlucks.filter((event) => event.id === id)

    const [invite, setInvite] = useState({})
    
    const changeHandler = (e) => {
        setInvite({guest_id: parseInt(e.target.value), potluck_id: potluck[0].id})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        postInvites(invite);
        console.log('HEYOOOOOOO', invite)
    }

    return (
        <div>
            <h1>Edit your potluck</h1>
            <h2>Event name: {potluck[0].name}</h2>
            <h3>{potluck[0].date} {potluck[0].time}</h3>
            <p>Location: {potluck[0].location}</p>
            <p>Event ID: {potluck[0].id}</p>
            <p>People going: [list[</p>
            <form onSubmit ={submitHandler}>
                <label>Friend
                    <input 
                        name = 'Friend'
                        type = 'text'
                        placeholder = 'Enter your friends ID'
                        onChange = {changeHandler}
                    />
                </label>
                <button>Invite!</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        potlucks: state.dataReducer.potlucks
    }
}

export default connect(mapStateToProps, {postInvites})(Potluck)
