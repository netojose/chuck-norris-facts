import React from 'react'
import { render } from 'enzyme'
import QuoteList from '../components/QuotesList'

describe('QuoteList', () => {
    it('Renders Hello component', () => {
        const hello = render(<QuoteList quotes={[]} />)
        expect(hello.find('h1').text()).toBe('')
    })
})
