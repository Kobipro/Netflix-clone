import React from 'react';
import Banner from './Components/Banner.component/banner.component';
import Section from './Components/Sections.component/section.component'; 
import Navbar from './Components/Navbar.component/navbar.component';
import Footer from './Components/Footer/footer.component';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Section />
        <Footer />
        
        {/* <Counter /> */}
    </div>
  );
}

export default App;


