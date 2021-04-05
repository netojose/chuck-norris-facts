/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useRef, memo } from 'react'

import newId from '../utils/new-id'

const Switch = (): JSX.Element => {
    const id = useRef(newId())
    return (
        <span>
            <input
                type="checkbox"
                id={id.current}
                css={(theme) => ({
                    height: 0,
                    width: 0,
                    display: 'none',
                    visibility: 'hidden',
                    '&:checked + label': {
                        background: theme.colors.inverted,
                    },
                    '&:checked + label:after': {
                        left: 'calc(100% - 2px)',
                        transform: 'translateX(-100%)',
                    },
                })}
            />
            <label
                htmlFor={id.current}
                css={(theme) => ({
                    cursor: 'pointer',
                    textIndent: -9999,
                    width: 50,
                    height: 25,
                    background: theme.colors.grey,
                    display: 'block',
                    borderRadius: 25,
                    position: 'relative',
                    '&:after': {
                        content: "''",
                        position: 'absolute',
                        top: 2,
                        left: 2,
                        width: 22,
                        height: 22,
                        background: theme.colors.light,
                        borderRadius: 22,
                        transition: '0.3s',
                    },
                    '&:active:after': {
                        width: 32,
                    },
                })}
            >
                Toggle
            </label>
        </span>
    )
}

export default memo(Switch)