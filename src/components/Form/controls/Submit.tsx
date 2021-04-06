/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

import { inputStyles } from '../common'

interface IProps {
    label: string
    disabled: boolean
    testid?: string
}

const Submit = ({
    label,
    disabled = false,
    testid = undefined,
}: IProps): JSX.Element => (
    <input
        type="submit"
        disabled={disabled}
        value={label}
        data-testid={testid}
        css={(theme) => ({
            ...inputStyles(theme),
            width: 'auto',
            margin: `0 ${theme.spacing * 2}px`,
        })}
    />
)

export default memo(Submit)
