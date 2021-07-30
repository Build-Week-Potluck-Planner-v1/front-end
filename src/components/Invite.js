import React from 'react'
import { connect } from 'react-redux';
import { putInvites } from '../store/actions';

function Invite(props) {
    const RSVP = () => {
        props.invite.has_rsvped = true;
        props.putInvites(props.invite.id, props.invite.has_rsvped)
    }
    return (
        <div>
            <p>Invite ID is {props.invite.id} <button onClick = {RSVP}>RSVP</button></p>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        successMessage: state.dataReducer.successMessage,
    }
}

export default connect(mapStateToProps, {putInvites})(Invite)
