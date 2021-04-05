/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'

import { Form, Input, Submit } from './Form'

export default (): JSX.Element => {
    const [data, setData] = useState<Record<string, string>>({})
    return (
        <Form onChange={setData} onSubmit={() => null} values={data}>
            <Input label="Search term" />
            <Submit label="Search quotes" />
        </Form>
    )
}
