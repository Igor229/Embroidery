import './style.scss'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portfolio/>
    </div>
  );
}

export default App;
