import { createStore } from "vuex";
import axios from "axios";

import moviesModule from './modules/movies/index'
import tvShowsModule from './modules/TvShows/index';

import { State } from './model'
import { Api } from './const'

const state: State = {
    detail: {}
}

const store = createStore({
    modules: {
        movies: moviesModule,
        tvShows: tvShowsModule
    },
    state,
    actions: {
        getDetail(context: any, payload: { value: string }) {
            axios.get(`${Api.url}/Title/${Api.key}/${payload.value}/Posters,Images,Ratings,`)
                .then(e => {
                    context.commit('setDetail', { value: e.data })
                })
        }
    },
    mutations: {
        setDetail(state: State, payload: { value: {} }) {
            state.detail = payload.value
        }
    },
    getters: {
        detail(state: State) {
            return state.detail
        }
    }
})

export default store;