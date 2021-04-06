/** @jsx jsx */
import { jsx, ThemeProvider, Global, css } from '@emotion/react'

import LayoutDirectionChoser from './LayoutDirectionChoser'
import ChuckNorrisSearcher from './ChuckNorrisSearcher'
import theme from '../utils/theme'

export default (): JSX.Element => (
    <ThemeProvider theme={theme}>
        <Global
            styles={css({
                html: { scrollBehavior: 'smooth' },
                body: { margin: 0 },
                '*': { fontSize: '1em', boxSizing: 'border-box' },
                '*:focus': {
                    outline: 'none',
                    boxShadow: '0 0 0 5px rgba(0, 147, 255, 0.4)',
                    transition: 'all 0.3s ease',
                },
            })}
        />
        <LayoutDirectionChoser />
        <ChuckNorrisSearcher />
    </ThemeProvider>
)
