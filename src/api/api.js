import axios from "axios"

// const baseUrl = 'http://localhost:5001'
const baseUrl = 'https://instaclone-server.onrender.com'

export const getPosts = (currPage) => axios.get(`${baseUrl}/posts?page=${currPage}`)
export const createPosts = (data) => axios.post(`${baseUrl}/posts`, data)