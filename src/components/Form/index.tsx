/** @jsx jsx */
import { jsx, Theme } from '@emotion/react'
import { useCallback } from 'react'

import FormContext from './context'
import InputWrapper from './InputWrapper'

interface PropsForm {
    children: JSX.Element[]
    values: Record<string, string>
    onChange: (event: Record<string, string>) => void
    onSubmit: (values: Record<string, string>) => void
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

const Form = ({
    children,
    onSubmit,
    onChange,
    values,
}: PropsForm): JSX.Element => {
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault()
            onSubmit(values)
        },
        [onSubmit, values]
    )
    const context = {
        values,
        handleChange: (name: string, value: string) =>
            onChange({ ...values, [name]: value }),
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormContext.Provider value={context}>
                {children}
            </FormContext.Provider>
        </form>
    )
}

const Input = ({ label }: PropsField): JSX.Element => {
    return (
        <InputWrapper label={label} name="foo">
            {({ handleChange, value, id, name }) => (
                <input
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => handleChange(name, e.target.value)}
                    type="text"
                    css={(theme) => ({
                        ...inputStyles(theme),
                    })}
                />
            )}
        </InputWrapper>
    )
}

const Select = ({ label, items }: PropsSelect): JSX.Element => {
    return (
        <InputWrapper label={label} name="bar">
            {({ handleChange, value, id, name }) => (
                <select
                    id={id}
                    name={name}
                    onChange={(e) => handleChange(name, e.target.value)}
                    value={value}
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
            )}
        </InputWrapper>
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
