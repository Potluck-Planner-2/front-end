import React, { useEffect, useState } from 'react'
import './Potluck.css'
import { useHistory, useParams } from 'react-router'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const EditPotluck = () => {

    const history = useHistory()
    const { id } = useParams()

    const [editPotluck, setEditPotluck] = useState({})

    useEffect(() => {

        axiosWithAuth().get(`/api/potlucks/${id}`)
                        .then(res=> {

                            setEditPotluck(res.data.potluck)

                        })
                        .catch(err=> {

                            console.log(err)

                        })

    }, [])

    const updatePotluck = () => {


        axiosWithAuth().put(`/api/potlucks/${id}`, {datetime:editPotluck.datetime, location:editPotluck.location})
                        .then(res=> {

                            console.log(res)

                        })
                        .catch(err=> {

                            console.log(err)

                        })
        history.push('/potlucks')


    }

    const handleChange = (e) => {

       

            setEditPotluck({...editPotluck, [e.target.name]:e.target.value})
        


    }

    return(


        <div className='potluck-container'>
                <div className='potluck-main'>
                    <div onChange={handleChange} className='potluck-details'>Datetime: <input type='text' name='datetime' value={editPotluck.datetime}/></div>
                    <div onChange={handleChange} className='potluck-details'>Location: <input type='text' name='location' value={editPotluck.location} /></div>
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