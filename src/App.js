import './App.css';
import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter'; // Ensure this file exists
import Square from './components/Square';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ShoppingList />
        <Counter /> */}

        <Square />
      </header>
    </div>
  );
}

export default App;
