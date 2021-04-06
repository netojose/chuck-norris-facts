/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

export interface IProps {
    current: boolean
    page: number
    onClick: (page: number) => void
}

const PaginatorButton = ({ current, page, onClick }: IProps): JSX.Element => (
    <li css={(theme) => ({ margin: theme.spacing / 2 })}>
        <input
            type="button"
            value={page}
            disabled={current}
            onClick={() => onClick(page)}
            className={current ? 'active' : ''}
            css={(theme) => ({
                border: 'none',
                fontFamily: theme.fontFamily,
                background: theme.colors.secondary,
                color: theme.colors.light,
                borderRadius: theme.radius / 2,
                '&.active': {
                    background: theme.colors.primary,
                },
            })}
        />
    </li>
)

export default memo(PaginatorButton)
