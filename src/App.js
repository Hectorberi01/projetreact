import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import FooterComponent from './Components/Footer/FooterComponent';
import HomeComponent from './Components/Home/HomeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailsComponent from './Components/Details/DetailsComponent';
import ContactComponent from './Components/Contact/ContactComponent';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div>
        <Router>
        <Routes>
            <Route path="/details/:id" element={<DetailsComponent/>} />
            <Route path="/contact" element={<ContactComponent/>} />
            <Route path="/home" element={<HomeComponent />} />
          </Routes>
        </Router>
      </div>

      <div>
        <FooterComponent />
      </div>

    </div>
  );
}

export default App;
