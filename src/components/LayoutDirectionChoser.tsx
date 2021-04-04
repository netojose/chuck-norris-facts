/** @jsx jsx */
import { jsx } from '@emotion/react'
import Switch from './Switch'

export default (): JSX.Element => {
    return (
        <div
            css={(themeLayout) => ({
                position: 'fixed',
                left: themeLayout.spacing / 2,
                top: themeLayout.spacing / 2,
            })}
        >
            <Switch />
        </div>
    )
}
