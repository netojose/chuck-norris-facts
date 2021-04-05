/** @jsx jsx */
import { jsx } from '@emotion/react'

import InputWrapper from '../InputWrapper'
import { inputStyles } from '../common'

interface Props {
    label: string
}

export default ({ label }: Props): JSX.Element => {
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
