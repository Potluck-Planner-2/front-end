import React from 'react'
import './Potluck.css'


const ListItemGuest = (props) => {

    const { item } = props

    return (
        
            
                <div className='list-item'>{item}<input type='checkbox' />
                </div>
         
         
        
    )


}

export default ListItemGuest