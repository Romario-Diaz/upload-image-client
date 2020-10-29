import axios from 'axios'
import API from '../utils/const'

class UploadService {
    getImages() {
        return axios.get(`${API.URI}/dowload`)
    }

    sendImage(name, file) {
        const form = new FormData()
        form.append('name', name)
        form.append('file', file, 'form-data')

        return axios.post(`${API.URI}/upload`,form)
    }
}

export default new UploadService()