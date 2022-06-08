import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import About from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuDirectoryPage from './pages/MenuDirectoryPage';
import LocationsDirectoryPage from './pages/LocationsDirectoryPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='menu' element={<MenuDirectoryPage />} />
        <Route path='locations' element={<LocationsDirectoryPage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
