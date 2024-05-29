import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Footer from './Footer';
import MyComponent from './MyComponent';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/" 
              element={
                <>
                  <h1>Bienvenue dans mon premier projet React !</h1>
                  <MyComponent />
                  <p>Voici un exemple d'application React avec une barre de navigation et un pied de page.</p>
                </>
              } 
            />
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
