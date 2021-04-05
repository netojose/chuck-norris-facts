/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

import { inputStyles } from '../common'

interface IProps {
    label: string
}

const Submit = ({ label }: IProps): JSX.Element => (
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

export default memo(Submit)
