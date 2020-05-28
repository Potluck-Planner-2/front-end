import React from 'react'
import './Potluck.css'



const ListItemGuest = (props) => {

    const { item, setItemIDs, itemIDs } = props

    const handleChange = (e) => {

        if (e.target.checked)
        {

            setItemIDs([...itemIDs, item.item_id])
            

        }
        else {

            const filteredIDs = itemIDs.filter(id=> {


                return item.item_id !== id


            })

            setItemIDs(filteredIDs)

        }

        

    }

    

    return (
        
            
                <div className='list-item-two'>{item.name} ({item.first_name}){item.first_name === 'Nobody ' && <input onChange={handleChange} id={item.item_id} type='checkbox' />}
                </div>
         
         
        
    )


}

export default ListItemGuest