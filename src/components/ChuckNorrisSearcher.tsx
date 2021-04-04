/** @jsx jsx */
import { jsx } from '@emotion/react'

import QuoteList from './QuotesList'
import TabNavigator from './TabNavigator'
import Title from './Title'
import { Form, Select, Input, Submit } from './Form'

export default (): JSX.Element => (
    <div
        css={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            background: theme.colors.primary,
        })}
    >
        <div
            css={(theme) => ({
                width: 650,
                background: theme.colors.light,
                '@media (max-width: 650px)': { width: '100%' },
            })}
        >
            <Title text="Chuck Norris fact searcher" />
            <Form>
                <TabNavigator labels={['Get random quote', 'Search by term']}>
                    <div>
                        <Select label="Category" />
                    </div>
                    <div>
                        <Input label="Search term" />
                    </div>
                </TabNavigator>
                <Submit label="Load quotes" />
            </Form>
            <QuoteList
                quotes={[
                    {
                        id: '1',
                        text: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum porttitor, orci sit amet commodo pretium,
                        metus mi malesuada dolor, a condimentum neque arcu blan.
                        `,
                        url: '',
                        categories: ['foo', 'bar'],
                    },
                    {
                        id: '2',
                        text: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum porttitor, orci sit amet commodo pretium,
                        metus mi malesuada dolor, a condimentum neque arcu blan.
                        `,
                        url: '',
                        categories: ['foo', 'bar'],
                    },
                ]}
            />
        </div>
    </div>
)
