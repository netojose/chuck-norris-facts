/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'

import { Form, Input, Submit } from './Form'

interface Props {
    onSubmit: (data: Record<string, string | number>) => void
}

export default ({ onSubmit }: Props): JSX.Element => {
    const [data, setData] = useState<Record<string, string>>({})
    return (
        <Form onChange={setData} onSubmit={onSubmit} values={data}>
            <Input label="Search term" name="term" />
            <Submit label="Search quotes" />
        </Form>
    )
}
