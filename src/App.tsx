import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/footer'
import { store } from './store'
import Cart from './components/Cart'
import Entrega from './components/Entrega'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Entrega />
      </BrowserRouter>
    </Provider>
  )
}

export default App
