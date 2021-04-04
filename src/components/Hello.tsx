/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FunctionComponent } from 'react'

export interface HelloProps {
    name: string
}

const Hello: FunctionComponent<HelloProps> = ({ name }) => (
    <div>
        <h1
            css={{
                color: 'darkorchid',
                backgroundColor: 'lightgray',
            }}
        >
            {name}
        </h1>
    </div>
)

export default Hello
