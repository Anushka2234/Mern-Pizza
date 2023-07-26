import React from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {BrowserRouter ,Routes, Route ,Link ,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Navbar/>
      

    
        <Routes>
         <Route path="/" element ={<Homescreen/>}/>
         <Route path="/cart" element ={<Cartscreen/>}/>
         <Route path="/register" element ={<Registerscreen/>}/>

         <Route path="/login" element ={<Loginscreen/>}/>
         <Route path='/orders' element={<Ordersscreen/>}/>




         </Routes>
     

    
    
    </div>
    </BrowserRouter>
  );
}



export default App;
