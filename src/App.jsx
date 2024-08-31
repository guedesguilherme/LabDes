import { useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Aside from './components/aside/Aside'
import Nav from './components/nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  )
}

export default App
