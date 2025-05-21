import './App.css';
import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter'; // Ensure this file exists
import Square from './components/Square';
import './styles.css';
import ProductApp from './components/ProductApp';
import Navbar from './components/Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div> 
  );
}

export default App;
