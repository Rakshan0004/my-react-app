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
import { Route, Routes } from 'react-router-dom';
import FirstPage from './routing/FirstPage';
import SecondPage from './routing/SecondPage';
import ThirdPage from './routing/ThirdPage';

// const user = {
//   name: 'shiva',
//   city: "hyderabad",
//   area: "ammerpet"
// }

function App() {
  return (
    <div className="container">
        {/* <FirstComponent user = {user} /> */}
        {/* <SecondComponent name = {user.city}/>
        <ThirdComponent name = 'arjun'/>
        <FouthComponent name = "rose"/> */}
        {/* <StateMgm />
        <Chat />
        <FormEx /> */}

        <Routes>
          <Route path='/abc' element = {<FirstPage />} />
          <Route path='/xyz' element = {<SecondPage />} />
          <Route path='/def' element = {<ThirdPage />} />
        </Routes>
        
    </div> 
  );
}

export default App;
