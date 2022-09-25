import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/home.jsx'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './pages/Error/error.jsx'
import About from './pages/About/about.jsx'
import Details from './pages/Property/property.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Details />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
