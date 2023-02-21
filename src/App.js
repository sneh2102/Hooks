
import './App.css';
import './Navbar.js';
import Navbar from './Navbar.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import UseEffect from './UseEffect';
import UseState from './UseState';
import UseReff from './UseReff';
import UseMemo from './UseMemo';
import UseContext from './UseContext';
import UseReducer from './UseReducer';

function App() {
  return (
   <>
    
   <BrowserRouter>
   <Navbar Title='Hooks' text1="Home" text2="UseEffect" text3="useState" text4="useRef" text5="useContext" text6="useCallBack" text7="useReducer" text8="UseMemo"></Navbar>
   <Routes>
    <Route path='/Home' element={<Home/>} />
    <Route path='/UseEffect' element={<UseEffect/>} />
    <Route path='/UseState' element={<UseState/>}/>
    <Route path='/UseReff' element={<UseReff/>}/>
    <Route path='/UseMemo' element={<UseMemo/>}/>
    <Route path='/UseContext' element={<UseContext/>}/>
    <Route path='/UseReducer' element={<UseReducer/>}/>
    <Route path='/UseCallBack' element={<UseReducer/>}/>
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
