import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App
