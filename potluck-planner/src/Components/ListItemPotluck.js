import React from 'react'
import './Potluck.css'


const ListItemPotluck = (props) => {

    const { item } = props

    return (
        
           
                <div className='list-item'>{item}<input type='checkbox' disabled='true' /></div>
         
        
    )


}

export default ListItemPotluck