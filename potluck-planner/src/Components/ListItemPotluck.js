import React from 'react'
import './Potluck.css'


const ListItemPotluck = (props) => {

    const { item } = props

    return (
        
           
    <div className='list-item'>{item.name} ({item.first_name})</div>
         
        
    )


}

export default ListItemPotluck