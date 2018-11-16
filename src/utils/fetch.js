import axios from "axios"
import {
    Message
} from 'element-ui'
import store from '../store'
import router from '../router'
import {
    getToken,
    getTenantId,
    getStoreId
} from 'utils/auth'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000
})

service.interceptors.request.use(config => {
    if (store.getters.token) {
        const Authority = getTenantId() ? getToken() + '-' + getTenantId() : getToken()
        config.headers['Authority'] = Authority
        config.headers['storeId'] = getStoreId() || ''
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})


service.interceptors.response.use(response => response, error => {
    const response = error.response
    Message({
        message: response.data.msg,
        type: 'error'
    })
    if (response.status === 401) {
        store.dispatch('FedLogOut').then(() => {
            const envConfig = process.env.ENV_CONFIG
            if (envConfig === '') {
                const host = envConfig ? `${envConfig}.` : ''
                document.location.href = `http://${host}passport.molbase.cn/zh/auth/login?type=logout&return_url=http://${host}i.molbase.cn`
            }
        })
    }
    if (response.status === 403) {
        router.push('/403')
    }
    return Promise.reject(error)
})

export default service