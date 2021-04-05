/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext, useRef } from 'react'

import newId from '../../utils/new-id'
import FormContext, { IContextShape } from './context'

export interface IProps {
    children: (obj: {
        value: string
        label: string
        id: string
        name: string
        handleChange: (name: string, value: string) => void
    }) => JSX.Element | JSX.Element[]
    label: string
    name: string
}

export default ({ children, label, name }: IProps): JSX.Element => {
    const { current: id } = useRef(newId())
    const { values, handleChange } = useContext<IContextShape>(FormContext)
    const value: string = values[name] || ''

    return (
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
            {children({ value, id, label, name, handleChange })}
        </div>
    )
}
