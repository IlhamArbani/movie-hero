import { Module } from 'vuex';
import axios from 'axios'

import { Api } from '../../const';
import { TvShowsState } from './model';
import { RootState } from '../../model';



const state = {
    tvShows: [] as {
        id: string,
        title: string,
        image: string
    }[]
}

export const tvshows: Module<TvShowsState, RootState> = {
    namespaced: true,
    state,
    mutations: {
        setTvShows(state, payload) {
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
        getTvShows(state) {
            return state.tvShows
        }
    }
}