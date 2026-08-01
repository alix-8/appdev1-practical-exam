import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Bookshelf from './booklist/Booklist.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main>
        <Bookshelf />
      </main>
      <Footer />
    </div>
  )
}

export default App
