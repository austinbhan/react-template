import {
  BrowserRouter as Router,
  Route, Routes, Link
} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import FruitsVegetables from './components/FruitsVegetables';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';

export default function App() {
  return (
    <Router>
      <h1> This is the Home Page</h1>
      <ul className="navbar">
        <li>
          <Link to="aboutme">About Me</Link>
        </li>
        <li>
          <Link to="fruits-vegetables">Fruits and Vegetables</Link>
        </li>
      </ul>

      <Routes>
        <Route path="aboutme" element={<AboutMe/>}/>
        <Route path="fruits-vegetables" element={<FruitsVegetables/>}>
          <Route path ="fruits" element={<Fruits/>}/>
          <Route path="vegetables" element={<Vegetables/>}/>
        </Route>
      </Routes>
    
    </Router>
  );
}

