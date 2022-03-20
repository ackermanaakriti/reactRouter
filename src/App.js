import logo from './logo.svg';
import './App.css';

import {  Route, Routes} from 'react-router-dom';

import About from './about'
import Home from './home'
import Error from './error';
import Menu from './menu';
function App() {
  return <>
  <Menu/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route element={<Error/>}/>

  </Routes>
  
  <p>hello this is aakriti</p>
  </>
}

export default App;
