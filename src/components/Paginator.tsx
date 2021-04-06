/** @jsx jsx */
import { jsx } from '@emotion/react'
import { memo } from 'react'

export interface IProps {
    totalPages: number
    currentPage: number
    onPaginate: (index: number) => void
}

const Paginator = ({
    totalPages,
    currentPage,
    onPaginate,
}: IProps): JSX.Element | null =>
    totalPages < 2 ? null : (
        <ul
            data-testid="paginator"
            css={(theme) => ({
                padding: 0,
                margin: `${theme.spacing}px 0`,
                display: 'flex',
                listStyle: 'none',
                justifyContent: 'center',
            })}
        >
            {[...Array(totalPages + 1).keys()].slice(1).map((page) => (
                <li key={page} css={(theme) => ({ margin: theme.spacing / 2 })}>
                    <input
                        type="button"
                        value={page}
                        disabled={currentPage === page}
                        onClick={() => onPaginate(page)}
                        className={currentPage === page ? 'active' : ''}
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
            ))}
        </ul>
    )

export default memo(Paginator)
