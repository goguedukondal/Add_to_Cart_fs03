
import './App.css';
import Nav from './Components/Nav';
import {Box} from '@chakra-ui/react'
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Product from './Components/Product';
import Addtocart from './Components/Addtocart';
function App() {
  return (
 <Box  border='2px' borderColor='red'>
    <Nav style={{border:"2px solid red"}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Addtocart/>}/>
    </Routes>
 </Box>
   
  
   
  );
}

export default App;
