import { mount } from '@vue/test-utils';
import data from '../src/store/index'


import { createStore } from 'vuex'

describe('vuex modalIsOpen', () => {
    it('should get false', () => {

        const result = data.getters['modalIsOpen']

        expect(result).toEqual(false)
    })
})