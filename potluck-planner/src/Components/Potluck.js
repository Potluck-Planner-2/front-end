import React, { useState, useEffect, Component } from 'react'
import './Potluck.css'
import EditPotluck from './EditPotluck'
import { useHistory } from 'react-router'
import ListItemPotluck from './ListItemPotluck.js'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { fetchOrganizersPotluckData } from '../Redux/actions'
import { connect } from 'react-redux'




const Potluck = (props) => {

   const [newListItem, setNewListItem] = useState('')
   const [itemList, setItemList] = useState([])
   const history= useHistory()
   
  

 useEffect(()=> {


    axiosWithAuth().get(`/api/items/potlucks/${props.potluck.id}`)
    .then(res=> {
        
        setItemList(res.data.items)             
        
 
    })
    .catch(err=> {
 
        console.log(err)
 
    })



 }, [newListItem])
    

   const addToList = () => {


        axiosWithAuth().post('/api/items', {name:newListItem, potluck_id:props.potluck.id})
                        .then(res=> {

                            setNewListItem('')

                        })
                        .catch(err=> {

                            console.log(err)

                        })


   }
   const handleChange = (e) => {


        setNewListItem(e.target.value)


   }

   const editPotluckDetails = (id) => {


        history.push(`/potlucks/edit/${id}`)


   }

   const deletePotluck = (id) => {


        axiosWithAuth().delete(`/api/potlucks/${id}`)
                        .then(res=> {

                            props.fetchOrganizersPotluckData()

                        })
                        .catch(err=> {

                            console.log(err)

                        })


   }

   

    return (


            <div className='potluck-container'>
                <div className='potluck-main'>
                    <div className='potluck-details'>Datetime: {props.potluck.datetime}</div>
                    <div className='potluck-details'>Location: {props.potluck.location}</div>
                   
                    
                    <div className='spacer'>

                    {itemList.map(item=> {
                        
                        return <ListItemPotluck item={item} />
                        
                        
                    })}    

                    </div>
                    <div className='list-container'>
                        <input className='list-input' onChange={handleChange} type='text' name='list-item' value={newListItem} />
                        <div><button className='list-btn' onClick={addToList}>Add to List</button></div>
                    </div>
                    {/* only show if you are the organizer of the potluck - check props.potluck.organizer - toggle show */}
                    <button className='potluck-edit' onClick={() => {editPotluckDetails(props.potluck.id)}}>Edit</button>
                    <button className='potluck-edit' onClick={() => {deletePotluck(props.potluck.id)}}>Delete</button>
                </div>
            </div>


    )


}

const mapStateToProps = state => {


    return{

        isLoadingPotentialGuests: state.isLoadingPotentialGuests,
        isLoadingOrganizerPotlucks: state.isLoadingOrganizerPotlucks,
        isLoadingInvites: state.isLoadingInvites,
        invites: state.invites,
        potentialGuests: state.potentialGuests,
        myPotlucks: state.myPotlucks


    }

}

export default connect(mapStateToProps, {fetchOrganizersPotluckData})(Potluck)