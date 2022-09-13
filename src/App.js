import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import HomeNavbar from './components/homenav';
import Home from './page/home';
import AboutUs from './page/about';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ShopAll from './page/shopAll';
import Navbar from './components/navbar';
import Cart from './page/yourcart';


function App() {
  return (
    <Router>

    <div className="App">
      
      
      

      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        
        
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/shopAll' element={<ShopAll/>}/>
        <Route path='/yourcart' element={<Cart/>}/>

          

        

        
      </Routes>
     

    </div>
    </Router>
  );
}

export default App;