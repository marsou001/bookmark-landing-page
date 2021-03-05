import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Extensions from './components/Extensions/Extensions';
import Questions from './components/Questions/Questions';
import EmailList from './components/EmailList/EmailList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Extensions />
      <Questions />
      <EmailList />
      <Footer />
    </>
  );
}

export default App;
