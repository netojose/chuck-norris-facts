import { Theme } from '@emotion/react'

export const inputStyles = (theme: Theme): Record<string, string | number> => ({
    outline: 0,
    background: theme.colors.light50,
    width: '100%',
    border: 0,
    padding: theme.spacing,
    color: theme.colors.dark,
})
