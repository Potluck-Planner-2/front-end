import React, { useState } from 'react'
import './Potluck.css'
import Guest from './Guest'
import { Link } from 'react-router-dom'


const initialUsers = ['Patrick Harl', 'Michael Jordan', 'Tom Brady']

const CreatePotluck = () => {

    const [users, setUsers] = useState(initialUsers)

    return (
        <div>
        <h1>Create a Potluck</h1>
        <div className='navigation-container'>
            <nav className='navigation'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/potlucks'>My Potlucks</Link>
                <Link to='/potlucks/create'>Create a Potluck</Link>
                <Link to='/potlucks/invites'>My Invites</Link>
            </nav>
        </div>
        <div className='potluck-container'>
                <div className='potluck-main'>
                    <div className='potluck-details'>Date: <input type='text' name='date' /></div>
                    <div className='potluck-details'>Time: <input type='text' name='time' /></div>
                    <div className='potluck-details'>Location: <input type='text' name='location' /></div>
                    <div className='guests-container'>
                        <div className='potluck-guests'>Invite Guests: 
                        {users.map(user => {


                            return <Guest user={user} />


                        })}
                        
                        
                        </div>
                    </div>
                    <button className='potluck-list'>Create Potluck</button>
                </div>
        </div>
        </div>


    )



}

export default CreatePotluck