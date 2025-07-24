//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./RecipeBook/Home";
import About from './RecipeBook/About';
import RecipeBook from './RecipeBook/RecipeBook';
import recipes from './RecipeBook/Recipes';
import RecipePage from './RecipeBook/RecipePage';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          {/* Navigation */}
          <nav>
            <Link to="/"><button className="headerButton">Home</button></Link>
            <Link to="/about"><button className="headerButton">About</button></Link>
            <Link to="/RecipeBook"><button className="headerButton">Recipe Book</button></Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/RecipeBook" element={<RecipeBook />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
            
          </Routes>
        </div>
      </Router>

    </div>


  );
}

export default App;
