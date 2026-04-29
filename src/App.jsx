import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
