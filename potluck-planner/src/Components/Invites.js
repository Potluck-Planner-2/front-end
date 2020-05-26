import React from 'react'
import { Link } from 'react-router-dom'
import GuestPotluck from './GuestPotLuck'


const dummyInvite = 
    {

    date: '11/20/2020',
    time: '8:00 PM',
    location: {

        street: '731 Wilton Ave',
        city: 'Los Angeles',
        state: 'CA'

    },
    list: ['tacos', 'bananas', 'tuna casserole', 'cherry pie']



    }


const Invites = () => {


    return (


        <div>
        <h1>My Invites</h1>
        <div className='navigation-container'>
            <nav className='navigation'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/potlucks'>My Potlucks</Link>
                <Link to='/potlucks/create'>Create a Potluck</Link>
                <Link to='/potlucks/invites'>My Invites</Link>
            </nav>
        </div>
        <GuestPotluck invite={dummyInvite}/>
        </div>


    )


}
export default Invites