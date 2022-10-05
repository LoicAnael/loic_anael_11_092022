import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/Error/error.jsx'
import About from './pages/About/about.jsx'
import Details from './pages/Property/property.jsx'
import Home from './pages/Home/home.jsx'

const CreateRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/logement/:id" element={<Details />} />
    <Route path="/a-propos" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)
export default CreateRoutes
