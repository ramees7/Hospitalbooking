import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Auth from './Components/Auth';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Landing register/>}/> 
        <Route path='/login' element={<Landing />}/>
        <Route path='/home'element={<Home/>}/> 
      </Routes>
      <Footer/>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
