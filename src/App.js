import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HousingProject from "./pages/HousingProject";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:projectName/:id' element={<HousingProject />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
