import { ThemeProvider } from 'styled-components'

import { Header } from './components/Navbar'
import { Home } from './pages/Home'
import { Banner } from './pages/Home/components/Banner'
import { CoffeeList } from './pages/Home/components/CoffeeList'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}