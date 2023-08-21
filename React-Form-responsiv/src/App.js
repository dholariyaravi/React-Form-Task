import logo from './logo.svg';
import './App.css';
import Form12 from './Componet/Form12';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componet/Login';
import Home from './Componet/Home';
import UserData from './Componet/UserData';


function App() {
  return (
    <div className="App">
 
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Form12/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/user" element={<UserData />}/>
  
     </Routes>
     </BrowserRouter>

  
       
    </div>
  );
}

export default App;
