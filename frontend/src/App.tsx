// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import { Header } from "./components/layout/header"
import { Home } from "./page/home"
import { Footer } from "./components/layout/footer"

function App() {
  // const [count, setCount] = useState(0)
      // SI je suis sur  monsite.com/home => <Home/>
      // Si je suis sur monsite.com/projet => <Projet/>
  return (
    <div className="body">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
