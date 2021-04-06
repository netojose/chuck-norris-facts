/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useCallback } from 'react'

import { Form, Input, Submit } from './Form'

interface IProps {
    onSubmit: (data: Record<string, string | number>) => void
    disableSubmit: boolean
}

export default ({ onSubmit, disableSubmit }: IProps): JSX.Element => {
    const [data, setData] = useState<Record<string, string>>({})
    const [disable, setDisable] = useState<boolean>(true)
    const handleChange = useCallback((formData) => {
        setDisable(formData.term.trim().length < 3)
        setData(formData)
    }, [])
    return (
        <Form onChange={handleChange} onSubmit={onSubmit} values={data}>
            <Input
                label="Search term"
                name="term"
                placeholder="Please enter at least 3 characters"
                testid="input-term"
            />
            <Submit
                label="Search quotes"
                disabled={disableSubmit || disable}
                testid="submit-by-term"
            />
        </Form>
    )
}
