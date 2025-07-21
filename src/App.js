//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./RecipeBook/Home";
import About from './RecipeBook/About';
import RecipeBook from './RecipeBook/RecipeBook';
import Creampuff from './RecipeBook/Creampuff';
import ChocolatePie from './RecipeBook/ChocolatePie';

function App() {
  return (
    <div className="App">

        <Router>
      <div>
        {/* Navigation */}
        <nav>
          <Link to="/"><button class="headerButton">Home</button></Link>
          <Link to="/about"><button class="headerButton">About</button></Link>
          <Link to="/RecipeBook"><button class="headerButton">Recipe Book</button></Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/RecipeBook" element={<RecipeBook />} />
          <Route path="/creampuffs" element={<Creampuff />} />
          <Route path="/chocolatepie" element={<ChocolatePie />} />
        </Routes>
      </div>
    </Router>

    </div>


  );
}

export default App;
