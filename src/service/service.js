import axios from "axios" // axios is connecting backEnd with frontEnd


const baseUrl = '/api/units' // before build url was 'http://localhost:3001/api/units'

const getAll = () => {
    return axios.get(baseUrl)
    .then(res => res.data)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
    .then(res => res.data)
}

const deleteObj = (object) => {
    return axios.delete(baseUrl + '/' + object)
}



export default {getAll, create, deleteObj} // exporting multiple objects