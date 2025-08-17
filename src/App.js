//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./RecipeBook/Home.jsx";
import About from './RecipeBook/About.jsx';
import RecipeBook from './RecipeBook/RecipeBook.jsx';
import RecipePage from './RecipeBook/RecipePage.jsx';
import Favorites from './RecipeBook/Favorites.jsx';

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
            <Route path="/favorites" element={<Favorites />} />
            
          </Routes>
        </div>
      </Router>

    </div>


  );
}

export default App;
