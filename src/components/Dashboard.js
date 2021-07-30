import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {getPotlucks} from '../store/actions/index'

function Dashboard(props) {
    const {getPotlucks} = props
    useEffect(() => {
        getPotlucks()
    },[getPotlucks])

    return (
        <div>
            <h2>Hello User!</h2>
            <Link to = '/invites'><button>Invites</button></Link>
            <Link to = '/plan'><button>Plan a potluck</button></Link>
            <h2>Your Potlucks</h2>
            {props.potlucks.map(potluck => {
                return <Link key = {potluck.id} to = {`/potluck/${potluck.id}`}>
                            <h2>{potluck.name}</h2>
                            <p>{potluck.date}  {potluck.time}</p>
                            <p>{potluck.location}</p>
                        </Link>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        potlucks: state.dataReducer.potlucks,
    }
}

export default connect(mapStateToProps, {getPotlucks})(Dashboard)
