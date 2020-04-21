import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage, page) {
        return apiClient.get('/posts?paginate='+perPage+'&page='+page)
    },
    getEvent(id) {
        return apiClient.get('/posts/'+id)
    },
    postEvent(post) {
        return apiClient.post('/posts', post)
    }
}