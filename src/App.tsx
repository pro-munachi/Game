import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Games from './screens/Games/Games'
import Home from './screens/Home/Home'

function App() {
  return (
    <div className='App'>
      <Navbar message='you' />
      <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
