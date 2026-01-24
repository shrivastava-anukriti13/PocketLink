import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ContextProvider } from './contextApi/ContextApi'
import RegisterPage from './components/RegisterPage'

function App() {

  return (
    <>
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </>
  )
}

export default App
