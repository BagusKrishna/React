import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import Overview from './pages/Overview';
import Stats from './pages/Stats';
import Users from './pages/User';
import UserDetails from './pages/UserDetails';
import UserSettings from './pages/UserSettings'; // Import UserSettings
import Login from './pages/Login'; // Import Login page

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleAuth = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="App">
        <nav className="topnav">
          <div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link to="/user">
                    <li>User Profile</li>
                  </Link>
                </>
              )}
            </ul>
            <button onClick={handleAuth}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                isAuthenticated={isLoggedIn}
              />
            }
          >
            <Route path="overview" element={<Overview />} />
            <Route path="stats" element={<Stats />} />
          </Route>
          <Route
            path="/user/*"
            element={
              <ProtectedRoute
                element={<Users />} // Menampilkan halaman User Profile
                isAuthenticated={isLoggedIn}
              />
            }
          >
            <Route path="details/:userId" element={<UserDetails />} />
            <Route path="settings/:userId" element={<UserSettings />} /> {/* Rute tambahan untuk User Settings */}
          </Route>
          <Route
            path="/login"
            element={<Login setisLoggedIn={setisLoggedIn} />} // Menambahkan halaman login
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
