import { createStore } from "vuex";
import axios from "axios";

import moviesModule from './modules/movies/index'
import tvShowsModule from './modules/TvShows/index';

import { State } from './model'
import { Api } from './const'

const state: State = {
    detail: {},
    suggest: []
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
        },
        setSuggest(context: any, payload: {}) {
            context.commit('setSuggest', { value: payload })
        }
    },
    mutations: {
        setDetail(state: State, payload: { value: {} }) {
            state.detail = payload.value
        },
        setSuggest(state: State, payload: { value: {} }) {
            state.suggest = [...state.suggest, payload.value]
        }
    },
    getters: {
        detail(state: State) {
            return state.detail
        },
        suggests(state: State) {
            return state.suggest
        }
    }
})

export default store;