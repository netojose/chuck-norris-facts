/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect } from 'react'

import QuoteList from './QuotesList'
import TabNavigator from './TabNavigator'
import Title from './Title'
import { Form, Select, Input, Submit } from './Form'
import useFetch from '../hooks/useFetch'

type Option = { label: string; value: string }

export default (): JSX.Element => {
    const [formCategory, setFormCategory] = useState<Record<string, string>>({})
    const [formTerm, setFormTerm] = useState<Record<string, string>>({})
    const [categories, setCategories] = useState<Array<Option>>([])
    const { response } = useFetch('https://api.chucknorris.io/jokes/categories')
    useEffect(() => {
        if (response) {
            setCategories(
                response.map((item: Option) => ({ label: item, value: item }))
            )
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
                    <Form
                        onChange={setFormCategory}
                        onSubmit={() => null}
                        values={formCategory}
                    >
                        <Select
                            label="Category"
                            items={[{ label: 'All', value: '' }, ...categories]}
                        />
                        <Submit label="Load quotes" />
                    </Form>
                    <Form
                        onChange={setFormTerm}
                        onSubmit={() => null}
                        values={formTerm}
                    >
                        <Input label="Search term" />
                        <Submit label="Search quotes" />
                    </Form>
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
