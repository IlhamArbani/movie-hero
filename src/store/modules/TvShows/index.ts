import axios from 'axios'

import { Api } from '../../const';

type State = {
    tvShows: {}[]
}

const state: State = {
    tvShows: []
}

export default {
    namespaced: true,
    state,
    mutations: {
        setTvShows(state: State, payload: { value: [] }) {
            state.tvShows = payload.value
        }
    },
    actions: {
        async getTvShowItem(context: any) {
            const tvShows = await axios.get(`${Api.url}/Top250Tvs/${Api.key}`)
                .then(e => {
                    return e.data.items
                })

            context.commit('setTvShows', { value: tvShows })
        }
    },
    getters: {
        getTvShows(state: State) {
            return state.tvShows
        }
    }
}