/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useRef } from 'react'

import newId from '../../utils/new-id'

export interface PropsForm {
    children: JSX.Element[]
}

export interface PropsField {
    label: string
}

export interface PropsSubmit {
    label: string
}

const Form = ({ children }: PropsForm): JSX.Element => <form>{children}</form>

const Input = ({ label }: PropsField): JSX.Element => {
    const id = useRef(newId())
    return (
        <div>
            <label htmlFor={id.current}>{label}</label>
            <input id={id.current} type="text" />
        </div>
    )
}

const Select = ({ label }: PropsField): JSX.Element => {
    const id = useRef(newId())
    return (
        <div>
            <label htmlFor={id.current}>{label}</label>
            <select id={id.current}>
                <option>All</option>
            </select>
        </div>
    )
}

const Submit = ({ label }: PropsSubmit): JSX.Element => (
    <input type="submit" value={label} />
)

export { Form, Input, Select, Submit }
