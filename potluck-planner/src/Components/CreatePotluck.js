import React, { useState, useEffect } from 'react'
import './Potluck.css'
import Guest from './Guest'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router'
import { fetchUsers } from '../Redux/actions'


const initialPotluck = {

    date:'',
    time:'',
    location:'',
    guests: []


}

const CreatePotluck = (props) => {

    const [newPotluck, setNewPotluck] = useState(initialPotluck)
    const history = useHistory()


    useEffect(()=> {


        props.fetchUsers()



    },[])

    const createNewPotluck = () => {
    
        axiosWithAuth().post('/api/potlucks', {name: 'potluck', location: newPotluck.location, datetime: `${newPotluck.date}, ${newPotluck.time}`})
                            .then(res=> {
                                console.log(res)
                                newPotluck.guests.forEach(guest=> {

                                    axiosWithAuth().post('/api/invites', {user_id: guest.id, potluck_id:res.data.potluck.id})
                                                    .then(res=> {

                                                        

                                                    })
                                                    .catch(err=> {

                                                        console.log(err)

                                                    })

                                })
                                

                                setNewPotluck(initialPotluck)
                                history.push('/potlucks')
    
                            })
                            .catch(err=> {
    
                                console.log(err)
    
                            })
    
            
    }

    const handleChange = (e) => {


        setNewPotluck({

            ...newPotluck,
            [e.target.name]: e.target.value

        })


    }

    const handleGuestChange = (e) => {

        if(e.target.checked)
        {

            axiosWithAuth().get(`/api/users/${e.target.id}`)
                        .then(res=> {

                            setNewPotluck({


                                ...newPotluck,
                                guests: [
                    
                                    ...newPotluck.guests,
                                    res.data.user
                    
                                ]
                    
                            })

                        })
                        .catch(err => {

                            console.log(err)

                        })
        }
        else {

            const filteredPotluck = newPotluck.guests.filter(guest=> {

                return JSON.stringify(guest.id) !== e.target.id

            })

            console.log(filteredPotluck)

            setNewPotluck({


                ...newPotluck,
                guests: filteredPotluck


            })

        }
        
    }

    return (
        <div>
        <h1>Create a Potluck</h1>
        <div className='navigation-container'>
            <nav className='navigation'>
                <Link to='/'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/potlucks'>My Potlucks</Link>
                <Link to='/potlucks/create'>Create a Potluck</Link>
                <Link to='/potlucks/invites'>My Invites</Link>
            </nav>
        </div>
        
        
        <div className='potluck-container'>
                <div className='potluck-main-two'>
                    <div onChange={handleChange} className='potluck-details-two'>Date: <input className='list-input' type='text' name='date' value={newPotluck.date}/></div>
                    <div onChange={handleChange} className='potluck-details-two'>Time: <input className='list-input' type='text' name='time' value={newPotluck.time}/></div>
                    <div onChange={handleChange} className='potluck-details-two'>Location: <input className='list-input' type='text' name='location' value={newPotluck.location}/></div>
                    <div className='guests-container'>
                        <div className='potluck-guests'><span className='bold'>Invite Guests</span>
                        {props.isLoadingPotentialGuests && <div>Loading...</div>}
                        {!props.isLoadingPotentialGuests && props.potentialGuests.map(user => {


                            return <Guest handleGuestChange={handleGuestChange} user={user} />


                        })}
                                   
                    
                        
                        </div>
                    </div>
                    <button onClick={createNewPotluck} className='potluck-list'>Create Potluck</button>
                    
                </div>
        </div>
        }
        </div>


    )

    }

const mapStateToProps = state => {


    return {


        isLoadingPotentialGuests: state.isLoadingPotentialGuests,
        potentialGuests: state.potentialGuests


    }


}

export default connect(mapStateToProps, { fetchUsers })(CreatePotluck)