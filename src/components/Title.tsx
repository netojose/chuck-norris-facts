/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

export interface Props {
    text: string
}

const Title = ({ text }: Props): JSX.Element => (
    <h1
        css={(theme) => ({
            fontFamily: theme.fontFamily,
            textAlign: 'center',
            fontSize: '2.0em',
        })}
    >
        {text}
    </h1>
)

export default memo(Title)
