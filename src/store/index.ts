import { createStore } from "vuex";
import axios from "axios";

import moviesModule from './modules/movies/index'
import tvShowsModule from './modules/TvShows/index';

import { State } from './model'
import { Api } from './const'

const state: State = {
    detail: {},
    suggest: [],
    searchItems: [],
    user: {},
    modalIsOpen: false
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
        },
        searchByTitle(context: any, payload: string) {
            console.log(payload)
            axios.get(`${Api.url}/SearchTitle/${Api.key}/${payload}`)
                .then(e => {
                    context.commit('setSerchItems', { value: e.data.results })
                })

        },
        login(context: any, payload: { username: string, password: string }) {
            if (payload.username === 'IlhamArbani' && payload.password === 'admin') {
                context.commit('setUser', { value: { name: 'Ilham Naufal' } })
            }
        },
        setModal(context: any, payload: boolean) {
            context.commit('setModal', { value: payload })
        }
    },
    mutations: {
        setDetail(state: State, payload: { value: {} }) {
            state.detail = payload.value
        },
        setSuggest(state: State, payload: { value: {} }) {
            state.suggest = [...state.suggest, payload.value]
        },
        setSerchItems(state: State, payload: { value: [] }) {
            state.searchItems = payload.value
        },
        setUser(state: State, payload: { value: {} }) {
            state.user = payload.value
        },
        setModal(state: State, payload: { value: boolean }) {
            state.modalIsOpen = payload.value
        }
    },
    getters: {
        detail(state: State) {
            return state.detail
        },
        suggests(state: State) {
            return state.suggest
        },
        searchItem(state: State) {
            return state.searchItems
        },
        user(state: State) {
            return state.user
        },
        modalIsOpen(state: State) {
            return state.modalIsOpen
        }
    }
})

export default store;