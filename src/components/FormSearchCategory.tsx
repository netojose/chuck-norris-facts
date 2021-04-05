/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useMemo } from 'react'

import { Form, Select, Submit } from './Form'

interface Props {
    categories: string[]
}

type Option = { label: string; value: string }

export default ({ categories }: Props): JSX.Element => {
    const [data, setData] = useState<Record<string, string>>({})
    const options = useMemo<Array<Option>>(
        () =>
            categories.map((item: string) => ({
                label: item,
                value: item,
            })),
        [categories]
    )
    return (
        <Form onChange={setData} onSubmit={() => null} values={data}>
            <Select
                label="Category"
                items={[{ label: 'All', value: '' }, ...options]}
            />
            <Submit label="Load quotes" />
        </Form>
    )
}
