import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Common/Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import WhyNextGen from './Pages/WhyNextGen.jsx'
import Contact from './Pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-nextgen" element={<WhyNextGen />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
