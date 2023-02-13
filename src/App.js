import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
