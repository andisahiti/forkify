import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://forkify-api.herokuapp.com/api/'
})

export default instance;