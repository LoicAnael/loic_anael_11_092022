import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import CreateRoutes from './routes'
const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <CreateRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
