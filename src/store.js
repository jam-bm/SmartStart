import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'


const Api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
})

Vue.use(Vuex)

export default new Vuex.Store({
    //state
    state: {
        loggedIn: false,
        profile: {
            user_id: null,
            username: '',
            token: ''
        },
        list: [],
        expertData: []
    },
    mutations: {
        changeProfile(state, payload) {
            state.profile = {
                user_id: payload.user.id,
                username: payload.username,
                token: payload.token || ''
            }
        },
        setLoggedIn(state, payload) {
            state.loggedIn = payload || false
        },

        setExpertsList(state, payload) {
            state.expertData = payload
        }
        //commit
    },
    actions: {
        //dispatch
        post({}, arg) {
            return new Promise(async (resolve, reject) => {
                try {
                    console.log(Api.defaults.headers.common["Authorization"]);

                    let {
                        data
                    } = await Api.post(arg.url, arg.data)
                    resolve(data)
                } catch (e) {
                    reject(e)
                }
            })
        },


        get({}, url) {


            return new Promise(async (resolve, reject) => {
                try {
                    console.log(Api.defaults.headers.common["Authorization"]);
                    let {
                        data
                    } = await Api.get(url)
                    resolve(data)
                } catch (e) {
                    reject(e)
                }
            })
        },

        async logIn({
            commit,
            dispatch
        }, objData) {
            try {
                // betta alohida axios kere chunki headersda Authorization bo‘sh bo‘lishi kere
                let {
                    data
                } = await axios.post('http://localhost:8000/user/login/', objData)
                // let expertData = await dispatch('get', '/api/superusers/list')

                console.log(data)

                localStorage.removeItem('userData')
                localStorage.setItem('userData', JSON.stringify({
                    token: data.token,
                    user: {
                        id: data.user_id,
                        username: data.username
                    },

                }))



                Api.defaults.headers.common["Authorization"] = `Token ${data.token}`
                commit('changeProfile', {
                    token: data.token,
                    user: {
                        id: data.user_id,
                    },
                    username: data.username
                })

                commit('setLoggedIn', true)
                await dispatch('initProfile')
                router.push('/')
            } catch (arg) {
                alert(arg)
            }
        },

        logOut({
            commit
        }) {
            localStorage.removeItem('userData')
            delete Api.defaults.headers.common["Authorization"]
            commit('changeProfile', {
                token: '',
                user: {
                    user_id: null,
                    username: ''
                }
            })

            commit('setLoggedIn')
            router.push('/login')
        },

        getStartupsList({
            dispatch
        }) {
            return new Promise(async (resolve) => {
                try {
                    let res = await dispatch('get', '/api/startups/list')
                    resolve(res)
                } catch (er) {
                    alert(er)
                }
            })
        },
       async initProfile({
            commit,
            dispatch
        }) {
            try {
                let s = localStorage.getItem('userData')
                console.log('initProfile', s)
                if (s) {
                    let data = JSON.parse(s)
                    if (!data.token) {
                        router.push('/login')
                        return
                    }

                    commit('changeProfile', {
                        token: data.token,
                        user: {
                            id: data.user.id
                        },
                        username: data.user.username
                    })
                    commit('setLoggedIn', true)
                    Api.defaults.headers.common["Authorization"] = `Token ${data.token}`
                    await dispatch('getExpertsList')
                    
                }
            } catch (err) {
                alert(err)
            }
        },

        async getExpertsList({
            commit,
            dispatch
        }) {
            try {
                let res = await dispatch('get', '/api/superusers/list')
                if (res && res.length) {
                    localStorage.setItem('expertsList', JSON.stringify(res))
                    commit('setExpertsList', res)
                }
            } catch (err) {
                alert(err)
            }
        }
    },

    getters: {
        isUserExpert(state) {
            return state.expertData.some(item => item.id == state.profile.user_id)
        }
    }
})