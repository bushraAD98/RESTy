
import './App.css';
import { Routes, Route } from "react-router-dom";
import History from './Components/history/History';
import Help from './Components/help/Help';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import {useReducer} from 'react' 
import historyReducer , {addAction} from '../src/Reducer.js' 
import Header from './Components/header/Header'

const initialState = {
  history: [],
}
function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const newHistory = (action) => {
    dispatch(addAction(action));
  }
  return (
   <>
<Header/>
      <Routes>
         <Route path="/" element={<Home newHistory={newHistory}/>} />
        <Route path="history" element={<History historyState={state} />} /> 
        <Route path="help" element={<Help />} /> 
      </Routes>
<Footer/>
   </>
  );
}

export default App;
