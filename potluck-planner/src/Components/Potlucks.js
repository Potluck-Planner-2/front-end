import React, { useEffect } from 'react'
import Potluck from './Potluck'
import './Potluck.css'
import { Link } from 'react-router-dom'
import { fetchOrganizersPotluckData } from '../Redux/actions'
import { connect } from 'react-redux'



const Potlucks = (props) => {

    useEffect(() => {

        props.fetchOrganizersPotluckData()
        


    }, [])

    return (

        <div className='potlucks-container'>
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
        
        {props.isLoadingOrganizerPotlucks && <div>Loading...</div>}
        {!props.isLoadingOrganizerPotlucks && props.myPotlucks.length > 0 && props.myPotlucks.map(potluck => {

            return <Potluck potluck={potluck} />


        })}
        </div>
        
    )


}

const mapStateToProps = state => {

    return {

    isLoadingPotentialGuests: state.isLoadingPotentialGuests,
    isLoadingOrganizerPotlucks: state.isLoadingOrganizerPotlucks,
    potentialGuests: state.potentialGuests,
    myPotlucks: state.myPotlucks

    }

}
export default connect(mapStateToProps, { fetchOrganizersPotluckData })(Potlucks)