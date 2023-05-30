import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import M from './components/M';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Routes>
         
         <Route path="/" element={<M/>} />
           <Route path="/login" element={<Login />} />
         </Routes>
   
      
    </div>
  );
}

export default App;
