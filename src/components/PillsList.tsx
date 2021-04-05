/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

export interface IProps {
    items: string[]
}

const PillsList = ({ items }: IProps): JSX.Element | null => {
    if (items.length < 1) {
        return null
    }
    return (
        <ul
            css={(theme) => ({
                listStyle: 'none',
                display: 'flex',
                padding: `0px ${theme.spacing}px`,
                fontFamily: theme.fontFamily,
            })}
        >
            {items.map((item) => (
                <li
                    key={item}
                    css={(theme) => ({
                        margin: '10px 5px',
                        background: theme.colors.light,
                        borderRadius: theme.radius,
                        padding: theme.radius,
                        color: theme.colors.dark50,
                        fontSize: '.8em',
                    })}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default memo(PillsList)
