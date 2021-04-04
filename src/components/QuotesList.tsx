/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

import PillsList from './PillsList'

export interface Props {
    quotes: {
        id: string
        text: string
        url: string
        categories: string[]
    }[]
}

const QuotesList = ({ quotes }: Props): JSX.Element => (
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
            {quotes.map((quote) => (
                <li
                    key={quote.id}
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
    </section>
)

export default memo(QuotesList)
