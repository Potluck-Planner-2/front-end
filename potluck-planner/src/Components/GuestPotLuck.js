import React, { useState, useEffect } from 'react'
import ListItemGuest from './ListItemGuest'
import './Potluck.css'
import { axiosWithAuth } from '../utils/axiosWithAuth'



const GuestPotluck = (props) => {

    const [listItems, setListItems] = useState([])
    const [userID, setUserID] = useState(0)
    const [itemIDs, setItemIDs] = useState([])
    const [attendance, setAttendance] = useState(false)
    const [update, setUpdate] = useState()

    useEffect(() => {


        axiosWithAuth().get(`/api/potlucks/${props.invite.potluck_id}/items`)
                        .then(res=> {

                            
                            setListItems(res.data.items)

                            axiosWithAuth().get(`/api/invites/potlucks/${props.invite.potluck_id}/mine`)
                                            .then(res=> {
                                                setUserID(res.data.invites[0].user_id)
                                                setAttendance(res.data.invites[0].attending === 0 ? false : true)
                                            })
                                            .catch(err=> {

                                                console.log(err)

                                            })

                        })
                        .catch(err=> {

                            console.log(err)

                        })
        


    }, [update])

    const confirmAttendance = () => {


        axiosWithAuth().put(`/api/invites/${props.invite.invite_id}`, {attending:true})
                        .then(res=> {
                            
                            setAttendance(res.data.invite.attending === 0 ? false : true)
        
                        })
                        .catch(err=> {

                            console.log(err)

                        })

    }

    const confirmItems = () => {


        itemIDs.forEach(id=> {


            return axiosWithAuth().put(`/api/items/${id}`, {user_id:userID})
                                    .then(res=> {

                                        setUpdate(res)

                                    })
                                    .catch(err=> {


                                        console.log(err)


                                    })


        })


    }
    
    
    return (

        <div className='potluck-container'>
                <div className='potluck-main-two'>
                    <div className='potluck-details-two'>Datetime: {props.invite.datetime}</div>
                    <div className='potluck-details-two'></div>
                    <div className='potluck-details-two'>Location: {props.invite.location}</div>
                    {/* map through all list items and create <ListItem /> for each */}
                    {/* on click List, opens text box to add another item to list */}
                    
                    <div className='attendance'>
                        {attendance && <div>You have confirmed attendance!</div>}
                        {!attendance && <p>Confirm attendance?<button className='potluck-list-two' onClick={confirmAttendance}>Confirm</button></p>}
                            
                            
                    </div>

                    <div className='spacer-two'>
                    {listItems.length === 0 && <div>Loading...</div>}
                    {listItems.length > 0 && listItems.map(item=> {

                        return <ListItemGuest itemIDs={itemIDs} setItemIDs={setItemIDs} item={item}/>

                    })}
                        
                    </div>
                    <div className='confirm-container'>
                        <div className='confirm'>
                            <button className='potluck-list' onClick={confirmItems}>Confirm Items</button> 
                        </div>                   
                    </div>
                    {/* only show if you are the organizer of the potluck - check props.potluck.organizer - toggle show */}
                    
                </div>
            </div>

    )


}

export default GuestPotluck