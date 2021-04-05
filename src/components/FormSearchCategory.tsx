/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useMemo } from 'react'

import { Form, Select, Submit } from './Form'

interface Props {
    categories: string[]
    onSubmit: (data: Record<string, string | number>) => void
}

type Option = { label: string; value: string }

export default ({ categories, onSubmit }: Props): JSX.Element => {
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
        <Form onChange={setData} onSubmit={onSubmit} values={data}>
            <Select
                label="Category"
                items={[{ label: 'All', value: '' }, ...options]}
                name="category"
            />
            <Submit label="Load quotes" />
        </Form>
    )
}
