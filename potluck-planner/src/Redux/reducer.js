import React from 'react'
import { FETCH_ORGANIZERS_POTLUCKS_START, FETCH_ORGANIZERS_POTLUCKS_SUCCESS, FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_INVITES_START, FETCH_INVITES_SUCCESS } from './actions'

const initialState = {

    isLoadingPotentialGuests: false,
    isLoadingOrganizerPotlucks: false,
    isLoadingInvites: false,
    invites: [],
    potentialGuests: [],
    myPotlucks: []

}


export const Reducer = (state=initialState, action) => {


    switch(action.type) {
        case FETCH_ORGANIZERS_POTLUCKS_START:
            return {

                ...state,
                isLoadingOrganizerPotlucks: true

            }
        case FETCH_ORGANIZERS_POTLUCKS_SUCCESS:
            return {

                ...state,
                isLoadingOrganizerPotlucks:false,
                myPotlucks:action.payload

            }
        case FETCH_USERS_START:
            return {

                ...state,
                isLoadingPotentialGuests:true

            }

        case FETCH_USERS_SUCCESS:
            return {

                ...state,
                isLoadingPotentialGuests:false,
                potentialGuests: action.payload

            }
        case FETCH_INVITES_START:
            return {

                ...state,
                isLoadingInvites:true

            }
        case FETCH_INVITES_SUCCESS:
            return {

                ...state,
                isLoadingInvites:false,
                invites:action.payload

            }
        default:
            return state

    }


}
