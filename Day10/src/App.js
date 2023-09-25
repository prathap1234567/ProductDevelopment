// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import Appheader from './Appheader';
import Customer from './Customer';
import Dashboard from './Dashboard';
import Payment from './Payment';
import About from './About';
import SignUp from './Signup';
import LoginPage from './LoginPage';
import Admin from './Admin';
import Help from './Help';

import Analysis from './Analysis';
import Project from './Project';
import Privacy from './Privacy';
import Terms from './Terms';
import Home from './Home';




function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Analysis' element={<Analysis/>}/>
        <Route path='/Project' element={<Project/>}/>
        
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='/Home' element={<Home/>}/>
        
        
        

        
        




      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;