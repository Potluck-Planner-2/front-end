import React from 'react'


const Guest = (props) => {


    return(


        <div>
            
        
            <div>{props.user.first_name} {props.user.last_name}<input onChange={props.handleGuestChange} id={props.user.id} name={props.user.id} type='checkbox' /></div>

        
        </div>



    )

}
export default Guest