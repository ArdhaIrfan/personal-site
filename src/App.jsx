import Home from './pages/Home.jsx'
import Sporteev from './pages/Sporteev.jsx'
import Saroga from './pages/saroga'
import Todo from './pages/todo'
// import Recipe from './pages/Recipe.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sporteev" element={<Sporteev />} />
        <Route path="/saroga" element={<Saroga />} />
        <Route path="/todo" element={<Todo />} />
        {/* <Route path="/recipe-finder" element={<Recipe />} /> */}
      </Routes>
    </Router>
  )
}

export default App
