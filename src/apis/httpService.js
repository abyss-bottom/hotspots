import axios from "axios";

const successCode = 0
const multipartDataHeader = {"Content-Type": "multipart/form-data"}

export const proWebsite = "https://apis.twinkles.cn"
export const devWebsite = "http://localhost:7077"

const apiInstance = axios.create({
    baseURL: proWebsite,
    timeout: 10000
})

apiInstance.interceptors.request.use(
    c => {
        return c
    },
    e => {
        return Promise.reject(e)
    }
)

apiInstance.interceptors.response.use(
    response => {
        let data = response.data
        if (data.code === successCode) {
            return data.data
        }
        return Promise.reject(data.message)
    }, error => {
        return Promise.reject(error)
    }
)

export const GET = (url, params = {}) => {
    return apiInstance({
        method: "GET",
        url: url,
        params: params
    })
}

export const POST = (url, data = {}) => {
    return apiInstance({
        method: "POST",
        url: url,
        data: data,
        headers: multipartDataHeader
    })
}