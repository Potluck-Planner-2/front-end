import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GuestPotluck from './GuestPotLuck'
import { fetchInvites } from '../Redux/actions'
import { connect } from 'react-redux'



const Invites = (props) => {

    useEffect(() => {


        props.fetchInvites()


    }, [])

    return (


        <div>
        <h1>My Invites</h1>
        <div className='navigation-container'>
            <nav className='navigation'>
                <Link to='/'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/potlucks'>My Potlucks</Link>
                <Link to='/potlucks/create'>Create a Potluck</Link>
                <Link to='/potlucks/invites'>My Invites</Link>
            </nav>
        </div>
        {props.isLoadingInvites && <div>Loading...</div>}
        {!props.isLoadingInvites && props.invites.length > 0 && props.invites.map(invite=> {

            return <GuestPotluck invite={invite}/>


        })}
        
        
        </div>


    )


}
const mapStateToProps = state => {


    return {


        isLoadingInvites: state.isLoadingInvites,
        invites: state.invites


    }


}

export default connect(mapStateToProps, { fetchInvites })(Invites)