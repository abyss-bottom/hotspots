import axios from "axios";

const successCode = 0

export const proWebsite = "https://apis.twinkles.cn"
export const devWebsite = "http://localhost:7077"

const service = axios.create({
    baseURL: proWebsite
})

service.interceptors.response.use(
    response => {
        const data = response.data
        if (data.code === successCode) {
            return data.data
        } else {
            return Promise.reject(data.message)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service