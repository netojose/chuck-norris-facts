/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useCallback, useState } from 'react'

export interface Props {
    labels: string[]
    children: JSX.Element[]
}

export default ({ labels, children }: Props): JSX.Element => {
    const [active, setActive] = useState(0)
    const handleSetActive = useCallback((index) => setActive(index), [])
    return (
        <div>
            <ul>
                {labels.map((label, index) => (
                    <li key={label}>
                        <span
                            onClick={() => handleSetActive(index)}
                            onKeyPress={() => handleSetActive(index)}
                            role="button"
                            tabIndex={0}
                        >
                            {label}
                        </span>
                    </li>
                ))}
            </ul>
            {children.filter((_, index) => index === active)}
        </div>
    )
}
