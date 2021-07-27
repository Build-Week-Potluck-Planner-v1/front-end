import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Hello User!</h2>
            <Link to = '/invites'><button>Invites</button></Link>
            <Link to = '/plan'><button>Plan a potluck</button></Link>
            <p>You have X potlucks to go to and Y Potlucks planned</p>
            <div>
                <h3>This is a card</h3>
                <h4>Date:</h4>
                <h4>This amount of friends are going</h4>
                <p>Foods being brought</p>
            </div>
        </div>
    )
}

export default connect(null, {})(Dashboard)
