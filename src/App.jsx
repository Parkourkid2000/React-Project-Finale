import Nav from "./components/Nav"
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Pets from "./pages/Pets"
import PetInfo from "./pages/PetInfo"



function App() {

  return (

    <>
    <Nav />

<Router>
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/pets' element={<Pets />} />
    <Route path='/petInfo/:id' element={<PetInfo />} />
  </Routes>
    
        
        
</Router>
    <Footer />
    </>
  )
}

export default App
