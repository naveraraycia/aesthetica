import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HousingProject from "./pages/HousingProject";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:projectName/:id' element={<HousingProject />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
