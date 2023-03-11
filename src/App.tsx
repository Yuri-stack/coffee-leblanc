import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './context/CartContext'

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}