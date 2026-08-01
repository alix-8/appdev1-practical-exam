import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Booklist from './Booklist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Booklist />
      </main>
      <Footer />
    </>
  )
}

export default App
