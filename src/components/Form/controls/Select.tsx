/** @jsx jsx */
import { jsx } from '@emotion/react'

import InputWrapper from '../InputWrapper'
import { inputStyles } from '../common'

interface IProps {
    label: string
    name: string
    items: Array<{ label: string; value: string }>
    testid?: string
}

export default ({
    label,
    name,
    items,
    testid = undefined,
}: IProps): JSX.Element => {
    return (
        <InputWrapper label={label} name={name}>
            {({ handleChange, value, id }) => (
                <select
                    id={id}
                    name={name}
                    onChange={(e) => handleChange(name, e.target.value)}
                    value={value}
                    data-testid={testid}
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
