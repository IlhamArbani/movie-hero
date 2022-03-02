import { mount } from '@vue/test-utils'


import TheHeader from '../src/components/layout/TheHeader.vue'

describe('header components', () => {
    it('should get nav', () => {
        const wraper = mount(TheHeader)

        expect(wraper.text()).toMatch('Home')
    })
})

