import { createContext } from 'react'

export interface IContextShape {
    handleChange: (name: string, value: string) => void
    values: Record<string, string>
}

const formContext = createContext<IContextShape>({
    values: {},
    handleChange: () => null,
})

export default formContext
