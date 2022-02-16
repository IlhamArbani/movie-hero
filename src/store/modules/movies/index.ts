import { createStore } from "vuex";
import axios from 'axios'

import { Api } from '../../const'
import { State } from "./model";



const state: State = {
    movies: []
}

export default {
    namespaced: true,
    state,
    mutations: {
        setMovies(state: State, payload: { value: [] }) {
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
        getMovies(state: State) {
            return state.movies
        }
    }
}