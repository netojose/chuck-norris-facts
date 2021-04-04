/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

export interface Props {
    items: string[]
}

const PillsList = ({ items }: Props): JSX.Element => (
    <ul
        css={(theme) => ({
            listStyle: 'none',
            display: 'flex',
            padding: `0px ${theme.spacing}px`,
            fontFamily: theme.fontFamily,
        })}
    >
        {items.map((item) => (
            <li key={item} css={{ margin: '10px 5px' }}>
                {item}
            </li>
        ))}
    </ul>
)

export default memo(PillsList)
