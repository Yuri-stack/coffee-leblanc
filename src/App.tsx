import { ThemeProvider } from 'styled-components'

import { Header } from './components/Navbar'
import { Banner } from './components/Banner'
import { CoffeeList } from './components/CoffeeList'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Banner />
      <CoffeeList />
      <GlobalStyles />
    </ThemeProvider>
  )
}