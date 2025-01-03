import Nav from "./components/Nav"
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Pets from "./pages/Pets"



function App() {

  return (

    <>
    <Nav />

<Router>
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/pets' element={<Pets />} />
  </Routes>
    
        
        
</Router>
    <Footer />
    </>
  )
}

export default App
