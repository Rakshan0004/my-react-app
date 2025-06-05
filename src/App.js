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
import StateMgm from './components/StateMgm';
import Chat from './components/Chat';
import FormEx from './components/FormEx';


const user = {
  name: 'shiva',
  city: "hyderabad",
  area: "ammerpet"
}

function App() {
  return (
    <div className="container">
        <FirstComponent user = {user} />
        {/* <SecondComponent name = {user.city}/>
        <ThirdComponent name = 'arjun'/>
        <FouthComponent name = "rose"/> */}
        <StateMgm />
        <Chat />
        <FormEx />
    </div> 
  );
}

export default App;
