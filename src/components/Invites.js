import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getInvites} from '../store/actions/index'

function Invites(props) {
    useEffect(() => {
        props.getInvites();
    },[])
    const clickHandler = (invite) => {
        invite.has_rsvped = !invite.has_rsvped;
    }
    return (
        <div>
            <h1>Invites Page</h1>
            {props.invites.map((invite, idx) => {
                if(invite.has_rsvped === false){
                    return (
                        <div key = {idx}>
                            <p>Invite Id is {invite.id} <button onClick = {clickHandler(invite)}>RSVP Here!</button></p>
                            
                        </div>
                    )
                    
                }else{
                    return <button>Already RSVP'd</button>
                }
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        invites: state.dataReducer.invites,
    }
}

export default connect(mapStateToProps, {getInvites})(Invites)
