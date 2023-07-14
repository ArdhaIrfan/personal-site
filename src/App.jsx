import Home from './pages/Home.jsx'
import Sporteev from './pages/Sporteev.jsx'
import Saroga from './pages/saroga'
import Todo from './pages/todo'
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
      </Routes>
    </Router>
  )
}

export default App
