import React from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'

function Potluck({potlucks}) {
    const stringId = useParams();
    const id = parseInt(stringId.id);
    
    const potluck = potlucks.filter((event) => event.id === id)
    console.log(potluck)
    return (
        <div>
            <h1>Edit your potluck</h1>
            <h2>Event name: {potluck[0].name}</h2>
            <h3>{potluck[0].date} {potluck[0].time}</h3>
            <p>Location: {potluck[0].location}</p>
            <p>People going: [list[</p>
            <button>Invite More</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        potlucks: state.dataReducer.potlucks
    }
}

export default connect(mapStateToProps, {})(Potluck)
