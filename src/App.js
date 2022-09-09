import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './page/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
   
      <Home/>
    </div>
  );
}

export default App;
