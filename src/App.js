import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import DrinksDirectoryPage from './pages/DrinksDirectoryPage';
import LocationsDirectoryPage from './pages/LocationsDirectoryPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='menu' element={<DrinksDirectoryPage />} />
        <Route path='locations' element={<LocationsDirectoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
