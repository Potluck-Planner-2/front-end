import React, { useState } from 'react'
import './Potluck.css'
import EditPotluck from './EditPotluck'
import { useHistory } from 'react-router'
import ListItemPotluck from './ListItemPotluck.js'

const dummyListData = ['tacos', 'burritos', 'chalupas', 'ice cream', 'pie']


const Potluck = (props) => {

   const [listData, setListData] = useState(dummyListData)
   const [newListItem, setNewListItem] = useState('')
   const history= useHistory()


   const addToList = () => {


        setListData([...listData, newListItem])
        setNewListItem('')


   }
   const handleChange = (e) => {


        setNewListItem(e.target.value)


   }

   const editPotluckDetails = (id) => {


        history.push(`/potlucks/edit/${id}`)


   }

    return (


            <div className='potluck-container'>
                <div className='potluck-main'>
                    <div className='potluck-details'>Date: {props.potluck.date}</div>
                    <div className='potluck-details'>Time: {props.potluck.time}</div>
                    <div className='potluck-details'>Location: {props.potluck.location.street}, {props.potluck.location.city}, {props.potluck.location.state}</div>
                    {/* map through all list items and create <ListItem /> for each */}
                    {/* on click List, opens text box to add another item to list */}
                    
                    <div className='spacer'>

                        {listData.map(item => {

                            return <ListItemPotluck item={item} />


                        })}

                    </div>
                    <div className='list-container'>
                        <input onChange={handleChange} type='text' name='list-item' value={newListItem} />
                        <div><button className='list-btn' onClick={addToList}>Add to List</button></div>
                    </div>
                    {/* only show if you are the organizer of the potluck - check props.potluck.organizer - toggle show */}
                    <button className='potluck-edit' onClick={() => {editPotluckDetails(1)}}>Edit</button>
                </div>
            </div>


    )


}

export default Potluck