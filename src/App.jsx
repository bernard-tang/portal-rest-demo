import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Login } from './pages/Login'
import { AuthProvider } from './utils/authContext'
import React from 'react';
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Route> */}
           <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route element={<Layout/>}>
            <Route path="/Home" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>}/>
            <Route path="/Products" element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>}/>
            <Route path="/About" element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>}/>
            <Route path="/Contact" element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>}/>
            </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
