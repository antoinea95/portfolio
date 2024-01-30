import { About } from './layout/About';
import { Contact } from './layout/Contact';
import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { Work } from './layout/Work';
import './styles/main.css';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  )
}

export default App
