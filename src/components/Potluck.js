import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'
import {postInvites} from '../store/actions/index'
import {getFoods} from '../store/actions/index'
import {postFoods} from '../store/actions/index'

function Potluck(props) {
    const {potlucks, postInvites} = props
    const stringId = useParams();
    const id = parseInt(stringId.id);
    const potluck = potlucks.filter((event) => event.id === id)

    const [invite, setInvite] = useState({})
    const [foodsInput, setFoodsInput] = useState('')

    useEffect(() => {
        props.getFoods()
    }, [])
    
    const changeFriendsHandler = (e) => {
        setInvite({guest_id: parseInt(e.target.value), potluck_id: potluck[0].id})
    }
    const submitFriendsHandler = (e) => {
        e.preventDefault();
        postInvites(invite);
    }

    const changeFoods = (e) => {
        setFoodsInput(e.target.value)
    }
    const submitFoods = (e) => {
        e.preventDefault();
        postFoods(foodsInput)
    }

    return (
        <div>
            <h1>Edit your potluck</h1>
            <h2>Event name: {potluck[0].name}</h2>
            <h3>{potluck[0].date} {potluck[0].time}</h3>
            <p>Location: {potluck[0].location}</p>
            <p>Event ID: {potluck[0].id}</p>
            <p>People going: [list[</p>
            <form>
                <label>Friend
                    <input 
                        name = 'Friend'
                        type = 'text'
                        placeholder = 'Enter your friends ID'
                        onChange = {changeFriendsHandler}
                    />
                    <button onClick = {submitFriendsHandler}>Invite!</button>
                </label>
                <label>Foods you'd like to bring
                    <input 
                        name = 'foods'
                        type = 'text'
                        placeholder = 'Enter a food'
                        onChange = {changeFoods}
                    />
                    <button onClick = {submitFoods}>Bring this food!</button>
                </label>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        potlucks: state.dataReducer.potlucks,
        foods: state.dataReducer.foods
    }
}

export default connect(mapStateToProps, {postInvites, postFoods, getFoods})(Potluck)
