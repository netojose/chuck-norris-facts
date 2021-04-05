/** @jsx jsx */
import { jsx } from '@emotion/react'

import InputWrapper from '../InputWrapper'
import { inputStyles } from '../common'

interface Props {
    label: string
    items: Array<{ label: string; value: string }>
}

export default ({ label, items }: Props): JSX.Element => {
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
