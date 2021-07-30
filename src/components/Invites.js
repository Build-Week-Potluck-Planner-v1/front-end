import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getInvites} from '../store/actions/index'
import Invite from './Invite'

function Invites(props) {
    useEffect(() => {
        props.getInvites();
    },[])
    
    return (
        <div>
            <h1>Invites Page</h1>
            {props.invites.map((invite, idx) => {
                return (
                    <Invite invite = {invite} key = {idx}/>
                )
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
