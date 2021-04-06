/** @jsx jsx */
import { jsx } from '@emotion/react'

import InputWrapper from '../InputWrapper'
import { inputStyles } from '../common'

interface IProps {
    label: string
    name: string
    placeholder?: string
    testid?: string
}

export default ({
    label,
    name,
    placeholder = '',
    testid = undefined,
}: IProps): JSX.Element => {
    return (
        <InputWrapper label={label} name={name}>
            {({ handleChange, value, id }) => (
                <input
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(name, e.target.value)}
                    type="text"
                    data-testid={testid}
                    css={(theme) => ({
                        ...inputStyles(theme),
                    })}
                />
            )}
        </InputWrapper>
    )
}
