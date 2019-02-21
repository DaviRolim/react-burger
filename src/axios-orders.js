import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-e1126.firebaseio.com/'
})

export default instance