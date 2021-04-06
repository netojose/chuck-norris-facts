/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { memo, useMemo } from 'react'

import PaginatorButton from './PaginatorButton'

export interface IProps {
    totalPages: number
    currentPage: number
    onPaginate: (index: number) => void
}

const Paginator = ({
    totalPages,
    currentPage,
    onPaginate,
}: IProps): JSX.Element | null => {
    const links = useMemo<number[]>(() => {
        if (totalPages <= 1) {
            return []
        }

        let start = currentPage - 2
        let end = currentPage + 2
        start = start < 1 ? 1 : start
        end = end > totalPages ? totalPages : end
        return [...Array(totalPages + 1).keys()].slice(start, end + 1)
    }, [currentPage, totalPages])

    if (links.length < 1) {
        return null
    }

    return (
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
            {links[0] > 1 ? (
                <React.Fragment>
                    <PaginatorButton
                        current={false}
                        page={1}
                        onClick={onPaginate}
                    />
                    ...
                </React.Fragment>
            ) : null}
            {links.map((page) => (
                <PaginatorButton
                    key={page}
                    current={currentPage === page}
                    page={page}
                    onClick={onPaginate}
                />
            ))}
            {links[links.length - 1] < totalPages ? (
                <React.Fragment>
                    ...
                    <PaginatorButton
                        current={false}
                        page={totalPages}
                        onClick={onPaginate}
                    />
                </React.Fragment>
            ) : null}
        </ul>
    )
}

export default memo(Paginator)
