/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useCallback, useState } from 'react'

export interface IProps {
    labels: string[]
    children: JSX.Element[]
    onChangeTab?: (index: number) => void
    testidPrefix?: string
}

export default ({
    labels,
    children,
    onChangeTab = () => null,
    testidPrefix = undefined,
}: IProps): JSX.Element => {
    const [active, setActive] = useState(0)
    const handleSetActive = useCallback(
        (index) => {
            onChangeTab(index)
            setActive(index)
        },
        [onChangeTab]
    )
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
                            data-testid={
                                testidPrefix
                                    ? `${testidPrefix}${index}`
                                    : undefined
                            }
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
