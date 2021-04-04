/** @jsx jsx */
import { jsx } from '@emotion/react'

export interface Props {
    children: JSX.Element | JSX.Element[]
    id: string
    label: string
}

export default ({ children, id, label }: Props): JSX.Element => (
    <div
        css={(theme) => ({
            margin: theme.spacing * 2,
        })}
    >
        <label
            htmlFor={id}
            css={(theme) => ({
                fontFamily: theme.fontFamily,
                color: theme.colors.dark,
                display: 'inline-block',
                marginBottom: theme.spacing / 2,
            })}
        >
            <span css={(theme) => ({ paddingRight: theme.spacing / 2 })}>
                {label}
            </span>
        </label>
        {children}
    </div>
)
