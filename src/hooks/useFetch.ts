import { useState, useEffect } from 'react'

interface HookReturn {
    response: any // eslint-disable-line
    error: string | null
    isLoading: boolean
}

export default (url: string): HookReturn => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResponse(json)
                setIsLoading(false)
            } catch (responseError) {
                setError(responseError)
            }
        }
        fetchData()
    }, [url])
    return { response, error, isLoading }
}
