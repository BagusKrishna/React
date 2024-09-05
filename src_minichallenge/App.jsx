import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Finance from './pages/finance'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
  )
}

export default App