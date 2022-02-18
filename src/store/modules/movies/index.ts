import { Module } from "vuex";
import axios from 'axios'

import { Api } from '../../const'
import { MoviesState } from "./model";
import { RootState } from "../../model";



const state: MoviesState = {
    movies: [{
        id: '',
        title: '',
        image: ''
    }]
}

export const movies: Module<MoviesState, RootState> = {
    namespaced: true,
    state,
    mutations: {
        setMovies(state, payload) {
            state.movies = payload.value
        }
    },
    actions: {
        async getMoviesItem(context: any) {
            const movies = await axios.get(`${Api.url}/Top250Movies/${Api.key}`)
                .then(e => {
                    return e.data.items
                })

            context.commit('setMovies', { value: movies })
        }
    },
    getters: {
        getMovies(state) {
            return state.movies
        }
    }
}