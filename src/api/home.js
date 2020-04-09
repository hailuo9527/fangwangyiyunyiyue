import axios from "@/lib/request"


export const banner = () => {
    return axios.request({
        url: '/banner',
        method: 'get'
    })
}

export const playlist = ( uid ) => {
    return axios.request({
        url: '/user/playlist',
        method: 'get',
        params: { uid }  
    })
}