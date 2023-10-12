import './style.scss'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Blog/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
