import './App.css';
import ProdBody from './components/Pages/ProdBody';
import Homepage from './components/Pages/Homepage';
import { Routes, Route} from 'react-router-dom';
import IntroductionComponent from './components/Pages/Introduction';
import Education from './components/Pages/Education';
import EducourseBody from './components/Pages/EducourseBody';
import Contact from './components/Pages/Contact';
import SingleProduct from './components/Pages/SingleProduct';
import Cart from './components/Pages/Cart';
import Login from "./components/Pages/Login";
import CreateAccount from "./components/Pages/CreateAccount"
function App() {
  return (
<div>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/products" element={<ProdBody/>}/>
      <Route path="/introduction" element={<IntroductionComponent/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/education1" element={<EducourseBody ID='1' />}/>
      <Route path="/education2" element={<EducourseBody ID='2' />}/>
      <Route path="/education3" element={<EducourseBody ID='3' />}/>
      <Route path="/education4" element={<EducourseBody ID='4' />}/>
      <Route path="/education5" element={<EducourseBody ID='5' />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/products/:id" element={<SingleProduct />}/>
      <Route path="/login" element={<Login/>}/> 
        <Route path="/create-account" element={<CreateAccount/>}/>

      
    </Routes>

   </div>  
  )
     
  }


export default App;
