import { mount } from '@vue/test-utils'

import ButtonNavigation from '../src/components/ButtonNavigation.vue'

describe('header components', () => {
    it('get nav', () => {
        const wraper = mount(ButtonNavigation)

        expect(wraper.text()).toMatch('All')
    })
})