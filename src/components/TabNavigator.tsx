/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useCallback, useState } from 'react'

export interface Props {
    labels: string[]
    children: JSX.Element[]
}

export default ({ labels, children }: Props): JSX.Element => {
    const [active, setActive] = useState(0)
    const handleSetActive = useCallback((index) => setActive(index), [])
    return (
        <div>
            <ul
                css={(theme) => ({
                    listStyle: 'none',
                    display: 'flex',
                    padding: 0,
                    borderBottom: 'solid 1px',
                    borderBottomColor: theme.colors.dark50,
                })}
            >
                {labels.map((label, index) => (
                    <li
                        key={label}
                        className={index === active ? 'active' : ''}
                        css={(theme) => ({
                            color: theme.colors.secondary,
                            '&.active': {
                                borderBottom: 'solid 1px',
                                borderBottomColor: theme.colors.dark,
                                color: theme.colors.primary,
                            },
                        })}
                    >
                        <span
                            onClick={() => handleSetActive(index)}
                            onKeyPress={() => handleSetActive(index)}
                            role="button"
                            tabIndex={0}
                            css={(theme) => ({
                                fontFamily: theme.fontFamily,
                                display: 'block',
                                padding: theme.spacing,
                                cursor: 'pointer',
                            })}
                        >
                            {label}
                        </span>
                    </li>
                ))}
            </ul>
            {children.find((_, index) => index === active)}
        </div>
    )
}
