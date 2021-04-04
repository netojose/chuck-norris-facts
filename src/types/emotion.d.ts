import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string
            secondary: string
            inverted: string
            dark: string
            dark50: string
            light: string
            light50: string
            grey: string
        }
        fontFamily: string
        spacing: number
        radius: number
    }
}
