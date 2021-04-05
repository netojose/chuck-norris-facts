/** @jsx jsx */
import { jsx, Theme } from '@emotion/react'
import { useRef } from 'react'

import newId from '../../utils/new-id'
import Wrapper from './Wrapper'

interface PropsForm {
    children: JSX.Element[]
}

interface PropsField {
    label: string
}

interface PropsSubmit {
    label: string
}

interface PropsSelect extends PropsField {
    items: Array<{ label: string; value: string }>
}

const inputStyles = (theme: Theme) => ({
    outline: 0,
    background: theme.colors.light50,
    width: '100%',
    border: 0,
    padding: theme.spacing,
    color: theme.colors.dark,
})

const Form = ({ children }: PropsForm): JSX.Element => <form>{children}</form>

const Input = ({ label }: PropsField): JSX.Element => {
    const id = useRef(newId())
    return (
        <Wrapper id={id.current} label={label}>
            <input
                id={id.current}
                type="text"
                css={(theme) => ({
                    ...inputStyles(theme),
                })}
            />
        </Wrapper>
    )
}

const Select = ({ label, items }: PropsSelect): JSX.Element => {
    const id = useRef(newId())
    return (
        <Wrapper id={id.current} label={label}>
            <select
                id={id.current}
                css={(theme) => ({
                    ...inputStyles(theme),
                })}
            >
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </Wrapper>
    )
}

const Submit = ({ label }: PropsSubmit): JSX.Element => (
    <input
        type="submit"
        value={label}
        css={(theme) => ({
            ...inputStyles(theme),
            width: 'auto',
            margin: `0 ${theme.spacing * 2}px`,
        })}
    />
)

export { Form, Input, Select, Submit }
