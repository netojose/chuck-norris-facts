/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect } from 'react'

import QuoteList from './QuotesList'
import TabNavigator from './TabNavigator'
import Title from './Title'
import FormSearchCategory from './FormSearchCategory'
import FormSearchTerm from './FormSearchTerm'
import useFetch from '../hooks/useFetch'

export default (): JSX.Element => {
    const [categories, setCategories] = useState<string[]>([])
    const { response } = useFetch('https://api.chucknorris.io/jokes/categories')
    useEffect(() => {
        if (response) {
            setCategories(response)
        }
    }, [response])

    return (
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
                <TabNavigator labels={['Get random quote', 'Search by term']}>
                    <FormSearchCategory categories={categories} />
                    <FormSearchTerm />
                </TabNavigator>
                <QuoteList
                    quotes={[
                        {
                            id: '1',
                            text: 'quote',
                            url: '',
                            categories: ['foo', 'bar'],
                        },
                        {
                            id: '2',
                            text: 'quote',
                            url: '',
                            categories: ['foo', 'bar'],
                        },
                    ]}
                />
            </div>
        </div>
    )
}
