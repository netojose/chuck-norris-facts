/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useCallback } from 'react'

import FormContext from '../context'

interface IProps {
    children: JSX.Element[]
    values: Record<string, string>
    onChange: (event: Record<string, string>) => void
    onSubmit: (values: Record<string, string>) => void
}

export default ({
    children,
    onSubmit,
    onChange,
    values,
}: IProps): JSX.Element => {
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
