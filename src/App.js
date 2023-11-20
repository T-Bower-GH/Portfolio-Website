import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div><NavBar/></div>
      <div><Header/></div>
      <div className='upper-layer'>
        <div><AboutMe/></div>
        <div><MyPortfolio/></div>
        <div><ContactMe/></div>
        <div><Footer/></div>
      </div>
    </div>
  );
}

export default App;
