/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useCallback } from 'react'

import Switch from './Switch'

export default (): JSX.Element => {
    const handleSwitch = useCallback((checked: boolean) => {
        if (checked) {
            document.documentElement.setAttribute('dir', 'rtl')
        } else {
            document.documentElement.removeAttribute('dir')
        }
    }, [])
    return (
        <div
            css={(themeLayout) => ({
                position: 'fixed',
                left: themeLayout.spacing / 2,
                top: themeLayout.spacing / 2,
            })}
        >
            <Switch onChange={handleSwitch} />
        </div>
    )
}
