/** @jsx jsx */
import { jsx } from '@emotion/react'

import InputWrapper from '../InputWrapper'
import { inputStyles } from '../common'

interface Props {
    label: string
    name: string
}

export default ({ label, name }: Props): JSX.Element => {
    return (
        <InputWrapper label={label} name={name}>
            {({ handleChange, value, id }) => (
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