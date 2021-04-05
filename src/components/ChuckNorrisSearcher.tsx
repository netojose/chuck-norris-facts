/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect, useCallback } from 'react'

import QuoteList from './QuotesList'
import TabNavigator from './TabNavigator'
import Title from './Title'
import FormSearchCategory from './FormSearchCategory'
import FormSearchTerm from './FormSearchTerm'
import useFetch from '../hooks/useFetch'

const BASE_URL = process.env.API_BASE_URL

interface IQuote {
    id: string
    value: string
    url: string
    categories: string[]
}

export default (): JSX.Element => {
    const [quotes, setQuotes] = useState([])
    const [categories, setCategories] = useState<string[]>([])
    const { response: responseCategories } = useFetch({
        url: `${BASE_URL}/categories`,
    })
    const {
        response: responseQuotes,
        error: errorQuotes,
        fetchData: loadQuotes,
        isLoading: isLoadingSearch,
    } = useFetch({ autoFetch: false })

    useEffect(() => {
        if (responseCategories) {
            setCategories(responseCategories)
        }
    }, [responseCategories])

    useEffect(() => {
        if (!errorQuotes && responseQuotes) {
            const data = responseQuotes.result
                ? responseQuotes.result
                : [responseQuotes]
            setQuotes(
                data.map((quote: IQuote) => ({
                    id: quote.id,
                    text: quote.value,
                    url: quote.url,
                    categories: quote.categories,
                }))
            )
        }
    }, [responseQuotes, errorQuotes])

    const handleSearchByTerm = useCallback(
        (values) => {
            const term: string = (values.term ?? '').trim()
            loadQuotes(`${BASE_URL}/search?query=${term}`)
        },
        [loadQuotes]
    )

    const handleSearchByCategory = useCallback(
        (values) => {
            const category: string = values.category ?? ''
            const url = category
                ? `${BASE_URL}/random?category=${category}`
                : `${BASE_URL}/random`
            loadQuotes(url)
        },
        [loadQuotes]
    )

    const handleChangeTab = useCallback(() => {
        setQuotes([])
    }, [])

    return (
        <div
            css={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                overflow: 'hidden',
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
                <TabNavigator
                    labels={['Get random quote', 'Search by term']}
                    onChangeTab={handleChangeTab}
                >
                    <FormSearchCategory
                        categories={categories}
                        onSubmit={handleSearchByCategory}
                        disableSubmit={isLoadingSearch}
                    />
                    <FormSearchTerm
                        onSubmit={handleSearchByTerm}
                        disableSubmit={isLoadingSearch}
                    />
                </TabNavigator>
                <QuoteList quotes={quotes} />
            </div>
        </div>
    )
}
