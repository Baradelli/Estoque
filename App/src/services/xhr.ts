import axios from "axios";

const xhr = axios.create({ 
    baseURL: 'http://192.168.1.61:3001',
    headers: {      
        'Content-Type': 'application/json',
    }
 })

export default xhr;