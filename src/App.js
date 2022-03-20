import logo from './logo.svg';
import './App.css';

import {  Route, Routes} from 'react-router-dom';

import About from './about'
import Home from './home'
import Error from './error';
import Menu from './menu';
import Contact from './contact';
function App() {
  return <>
  <Menu/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact/:cname" element={<Contact/>}/>
    <Route element={<Error/>}/>

  </Routes>
  
 
  </>
}

export default App;
