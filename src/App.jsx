import Navbar from '../src/components/Navbar';
import './App.css'
import './home.css'
import './Characters.css'
import './Timelines.css'
import './Films.css'
import './Theories.css'
import Home from './components/Home'
import About from './components/About';
import JurassicCharacters from './components/Characters';
import Timeline from './components/Timelines';
import { Routes, Route } from 'react-router-dom'
import Films from './components/Films';
import Theories from './components/Theories';
function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/characters' element={<JurassicCharacters/>}/>
          <Route path='/timelines' element={<Timeline/>}/>
          <Route path='/films' element={< Films/>}/>
          <Route path='/theories' element={< Theories/>}/>
      </Routes>
    </>
  )
}
export default App;