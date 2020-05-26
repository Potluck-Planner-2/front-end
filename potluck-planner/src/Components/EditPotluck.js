import React from 'react'
import './Potluck.css'
import { useHistory } from 'react-router'

const EditPotluck = () => {

    const history = useHistory()

    const updatePotluck = () => {


        history.push('/potlucks')


    }

    return(


        <div className='potluck-container'>
                <div className='potluck-main'>
                    <div className='potluck-details'>Date: <input type='text' name='date' /></div>
                    <div className='potluck-details'>Time: <input type='text' name='time' /></div>
                    <div className='potluck-details'>Location: <input type='text' name='location' /></div>
                    {/* map through all list items and create <ListItem /> for each */}
                    {/* on click List, opens text box to add another item to list */}
                    <div className='spacer'></div>
                    {/* only show if you are the organizer of the potluck - check props.potluck.organizer - toggle show */}
                    <button className='potluck-list' onClick={updatePotluck}>Update</button>
                </div>
            </div>


    )


}

export default EditPotluck