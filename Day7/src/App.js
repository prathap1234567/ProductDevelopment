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
        
        




      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;