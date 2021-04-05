import { Theme } from '@emotion/react'

// eslint-disable-next-line
export const inputStyles = (theme: Theme): Record<string, any> => ({
    outline: 0,
    background: theme.colors.light50,
    width: '100%',
    border: 0,
    padding: theme.spacing,
    color: theme.colors.dark,
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
})
