import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Pets from "./pages/Pets";
import PetInfo from "./pages/PetInfo";

function App() {
//   const countRef = React.useRef(0);
//   const [renderCount, setRenderCount] = React.useState(0);

//   const handleClick = () => {
//     if (renderCount == 0) {
//       setRenderCount((prev) => prev + 1);
//     } else {
//       countRef.current++;
//     }
//   };

//   return (
//     <div>
//       <p>Ref: {countRef.current}</p>
//       <p>Render count: {renderCount}</p>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/petInfo/:id" element={<PetInfo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
