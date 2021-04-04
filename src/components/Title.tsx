/** @jsx jsx */
import { jsx } from '@emotion/react'

export interface Props {
    text: string
}

export default ({ text }: Props): JSX.Element => (
    <h1
        css={{
            color: 'red',
        }}
    >
        {text}
    </h1>
)
