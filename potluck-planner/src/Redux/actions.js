import { axiosWithAuth } from '../utils/axiosWithAuth'
export const FETCH_ORGANIZERS_POTLUCKS_START = 'FETCH_ORGANIZERS_POTLUCKS_START'
export const FETCH_ORGANIZERS_POTLUCKS_SUCCESS = 'FETCH_ORGANIZERS_POTLUCKS_SUCCESS'
export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_INVITES_START = 'FETCH_INVITES_START'
export const FETCH_INVITES_SUCCESS = 'FETCH_INVITES_SUCCESS'




export const fetchOrganizersPotluckData = () => {


    return dispatch => {

        dispatch({ type: FETCH_ORGANIZERS_POTLUCKS_START })

        axiosWithAuth().get('/api/potlucks/mine/organizer')
                        .then(res=> {

                            
                            dispatch({ type: FETCH_ORGANIZERS_POTLUCKS_SUCCESS, payload: res.data.potlucks})


                        })
                        .catch(err=> {


                            console.log(err)


                        })
        
        
        
    }

}

export const fetchUsers = () => {



    return dispatch => {


        dispatch({ type: FETCH_USERS_START })

        axiosWithAuth().get('/api/users')
                        .then(res=> {


                            dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data.users })


                        })
                        .catch(err=> {

                            console.log(err)

                        })


    }



}

export const fetchInvites = () => {


    return dispatch => {


        dispatch({ type: FETCH_INVITES_START })

        axiosWithAuth().get('/api/potlucks/mine/guest')
                        .then(res=> {

                            dispatch({ type:FETCH_INVITES_SUCCESS, payload: res.data.potlucks })

                        })
                        .catch(err=> {

                            console.log(err)

                        })


    }


}