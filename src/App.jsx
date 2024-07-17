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
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useSelector } from 'react-redux';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';


function App() {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          
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
              {/* <Route path="/Login" element={<Login/>}/>
              <Route element={<Layout/>}>
                <Route path="/Home" element={<Home/>}/>
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

        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
