import React from 'react'
import Potluck from './Potluck'
import './Potluck.css'
import { Link } from 'react-router-dom'

const fakePotluckData = {

    date: '11/20/2020',
    time: '8:00 PM',
    location: {

        street: '731 Wilton Ave',
        city: 'Los Angeles',
        state: 'CA'

    },
    list: ['tacos', 'bananas', 'tuna casserole', 'cherry pie']


}

const Potlucks = () => {

    return (

        <div>
        <h1>My Potlucks</h1>
        <div className='navigation-container'>
            <nav className='navigation'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/potlucks'>My Potlucks</Link>
                <Link to='/potlucks/create'>Create a Potluck</Link>
                <Link to='/potlucks/invites'>My Invites</Link>
            </nav>
        </div>
        {/* make a call to api and grab all potlucks that current user is an organizer for, call function that will: grab the data and dispatch an action event type: FETCH_USER_POTLUCKS_AS_ORGANIZER START, SUCCESS, FAILURE while passing in payload data */}
        <Potluck potluck={fakePotluckData} />
        </div>
        
    )


}
export default Potlucks