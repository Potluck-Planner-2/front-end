import axios from 'axios'

export const axiosWithAuth = () => {



    const token = localStorage.getItem('token')

    return axios.create({

        headers:
        {

            Authorization: token

        },
        baseURL: 'https://potluck-planner-1111.herokuapp.com'

    })



}