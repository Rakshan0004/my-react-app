import './App.css';
import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter'; // Ensure this file exists
import Square from './components/Square';
import './styles.css';
import ProductApp from './components/ProductApp';
import Navbar from './components/Navbar';
import Home from './Home';
import FirstComponent from './props/FirstComponent'
import SecondComponent from './props/SecondComponent'
import ThirdComponent from './props/ThirdComponent'
import FouthComponent from './props/FourthComponent'



function App() {
  return (
    <div className="container">
        <FirstComponent name = "rakshan" />
        <SecondComponent name = 'kalyan'/>
        <ThirdComponent name = 'arjun'/>
        <FouthComponent name = "rose"/>

    </div> 
  );
}

export default App;
