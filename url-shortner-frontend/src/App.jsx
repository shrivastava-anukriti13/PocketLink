import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ContextProvider } from './contextApi/ContextApi'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './components/Login'

function App() {

  return (
    <>
      <ContextProvider>
        <Router>
          <Navbar />
          <Toaster position="top-center" />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </>
  )
}

export default App
