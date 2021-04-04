import React from 'react'
import { render } from 'enzyme'
import Hello from '../components/Hello'

describe('Hello', () => {
    it('Renders Hello component', () => {
        const name = 'Jose'
        const hello = render(<Hello name={name} />)
        expect(hello.find('h1').text()).toBe(name)
    })
})
