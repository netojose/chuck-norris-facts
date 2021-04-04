/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

export interface Props {
    quotes: {
        id: string
        text: string
        url: string
        categories: string[]
    }[]
}

const QuoteList = ({ quotes }: Props): JSX.Element => (
    <section>
        <h2>Quotes</h2>
        <ul>
            {quotes.map((quote) => (
                <li key={quote.id}>
                    <blockquote>{quote.text}</blockquote>
                    <ul>
                        {quote.categories.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </section>
)

export default memo(QuoteList)
