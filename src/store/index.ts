import Vuex, { StoreOptions } from "vuex";
import axios from "axios";

import { movies } from './modules/movies/index'
import { tvshows } from './modules/TvShows/index';

import { RootState } from './model'
import { Api } from './const'

const state = {
    detailItem: {},
    suggest: [],
    searchItems: [],
    user: { name: 'ilham' },
    modalIsOpen: false
}

const store: StoreOptions<RootState> = {
    modules: {
        movies,
        tvshows
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
        setDetail(state, payload: { value: {} }) {
            state.detailItem = payload.value
        },
        setSuggest(state, payload: { value: {} }) {
            state.suggest = [...state.suggest, payload.value]
        },
        setSerchItems(state, payload: { value: [] }) {
            state.searchItems = payload.value
        },
        setUser(state, payload: { value: {} }) {
            state.user = payload.value
        },
        setModal(state, payload: { value: boolean }) {
            state.modalIsOpen = payload.value
        }
    },
    getters: {
        detail(state) {
            return state.detailItem
        },
        suggests(state) {
            return state.suggest
        },
        searchItem(state) {
            return state.searchItems
        },
        user(state) {
            return state.user
        },
        modalIsOpen(state) {
            return state.modalIsOpen
        }
    }
}

export default new Vuex.Store<RootState>(store);

export function useStore() {
    return store
}