import './App.css';
import Hero from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact'
import Platforms from './components/Platforms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        imageUrl='images/y.png' 
      />
      <Services
        title='Card Tittle'
        imageUrl='images/t.png'
        body='sfbvwv wjcjwvcuwvc wecbwhbvcuw wvcvwc uwecuwvcbu uwecu'
        />
        <Contact 
        imageUrl='images/f.png'/>
        <Platforms/>
        <Footer/>
    </div>
  );
}

export default App;
