import React, { useState } from 'react'
import ListItemGuest from './ListItemGuest'
import './Potluck.css'



const GuestPotluck = (props) => {



    return (

        <div className='potluck-container'>
                <div className='potluck-main'>
                    <div className='potluck-details'>Date: {props.invite.date}</div>
                    <div className='potluck-details'>Time: {props.invite.time}</div>
                    <div className='potluck-details'>Location: {props.invite.location.street}, {props.invite.location.city}, {props.invite.location.state}</div>
                    {/* map through all list items and create <ListItem /> for each */}
                    {/* on click List, opens text box to add another item to list */}
                    
                    <div className='attendance'>
                            <p>Will you be attending?</p>
                            <button>Yes</button>
                            <button>No</button>
                    </div>

                    <div className='spacer'>

                        

                        {props.invite.list.map(item => {

                            return <ListItemGuest item={item} />


                        })}
                        
                    </div>
                    <div className='confirm-container'>
                        <div className='confirm'>
                            <button>Confirm Items</button> 
                        </div>                   
                    </div>
                    {/* only show if you are the organizer of the potluck - check props.potluck.organizer - toggle show */}
                    
                </div>
            </div>

    )


}

export default GuestPotluck