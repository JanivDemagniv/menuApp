import { BrowserRouter } from 'react-router'
import './App.css'
import Router from './Router/Router'
import MenuProvider from './provider/MenuProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuProvider>
          <Router />
        </MenuProvider>
      </BrowserRouter>
    </>
  )
}

export default App
