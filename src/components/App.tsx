import React, { FunctionComponent } from 'react'
import QuoteList from './QuoteList'
import TabNavigator from './TabNavigator'
import Title from './Title'
import { Form, Select, Input, Submit } from './Form'

export const App: FunctionComponent = () => (
    <div>
        <Title text="Chuck Norris fact searcher" />
        <Form>
            <TabNavigator labels={['Get random quote', 'Search by term']}>
                <div>
                    <Select label="Category" />
                </div>
                <div>
                    <Input label="Term" />
                </div>
            </TabNavigator>
            <Submit label="Search" />
        </Form>
        <QuoteList
            quotes={[
                {
                    id: '1',
                    text: 'some text',
                    url: '',
                    categories: ['foo', 'bar'],
                },
            ]}
        />
    </div>
)
