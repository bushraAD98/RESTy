
import './App.css';
import { Routes, Route } from "react-router-dom";
import History from './Components/history/History';
import Help from './Components/help/Help';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
function App() {
  return (
   <>

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} /> 
        <Route path="help" element={<Help />} /> 
      </Routes>
<Footer/>
   </>
  );
}

export default App;
