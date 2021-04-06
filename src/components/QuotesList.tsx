/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo, useMemo, useState, useCallback, useEffect } from 'react'

import PillsList from './PillsList'
import Paginator from './Paginator'

export interface IProps {
    quotes: {
        id: string
        text: string
        url: string
        categories: string[]
    }[]
    perPage?: number
}

const QuotesList = ({ quotes, perPage = 5 }: IProps): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPages = useMemo(() => Math.ceil(quotes.length / perPage) || 1, [
        quotes,
        perPage,
    ])

    const handlePaginate = useCallback((page) => {
        setCurrentPage(page)
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [totalPages])

    const paginatedItems = useMemo(() => {
        const start = (currentPage - 1) * perPage
        const end = start + perPage
        return quotes.slice(start, end)
    }, [perPage, currentPage, quotes])

    return (
        <section>
            <h2
                css={(theme) => ({
                    fontFamily: theme.fontFamily,
                    fontSize: '1.5em',
                    margin: theme.spacing,
                })}
            >
                Quotes
            </h2>
            <ul
                css={(theme) => ({
                    listStyle: 'none',
                    padding: 0,
                    margin: `0 ${theme.spacing}px`,
                })}
            >
                {paginatedItems.map((quote) => (
                    <li
                        key={quote.id}
                        data-testid="quote"
                        css={(theme) => ({
                            background: theme.colors.grey,
                            borderRadius: theme.radius * 2,
                            margin: theme.spacing,
                        })}
                    >
                        <blockquote
                            css={(theme) => ({
                                fontFamily: theme.fontFamily,
                                margin: 0,
                                padding: theme.spacing * 6,
                                position: 'relative',
                                border: 'none',
                                color: theme.colors.primary,
                                '&:before, &:after': {
                                    position: 'absolute',
                                    fontSize: theme.spacing * 8,
                                    padding: theme.spacing,
                                    lineHeight: 1,
                                    color: theme.colors.dark50,
                                },
                                '&:before': {
                                    content: "'\\201C'",
                                    top: 0,
                                    left: theme.spacing,
                                },
                                '&:after': {
                                    content: "'\\201D'",
                                    right: theme.spacing,
                                    bottom: '-.5em',
                                },
                            })}
                        >
                            {quote.text}
                        </blockquote>
                        <PillsList items={quote.categories} />
                    </li>
                ))}
            </ul>
            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPaginate={handlePaginate}
            />
        </section>
    )
}

export default memo(QuotesList)
