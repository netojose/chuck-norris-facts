import { createContext } from 'react'

export interface ContextShape {
    handleChange: (name: string, value: string) => void
    values: Record<string, string>
}

const formContext = createContext<ContextShape>({
    values: {},
    handleChange: () => null,
})

export default formContext
