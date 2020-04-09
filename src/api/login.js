import axios from "@/lib/request"


export const login = ({phone, password}) => {
    return axios.request({
        url: '/login/cellphone',
        method: 'post',
        data: { phone, password }
    })
}