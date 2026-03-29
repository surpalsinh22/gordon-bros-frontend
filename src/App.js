import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shoes from './pages/Shoes';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Boots from './pages/Boots';
import Sandals from './pages/Sandals';
import Formal from './pages/Formal'
import Sneakers from './pages/Sneakers'
import Cart from './pages/Cart';
import Payment from './pages/Payment'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './pages/Footer';
import SearchPage from './pages/SearchPage';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <div className="flex flex-col min-h-screen">

    <Navbar/>


   <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchPage />} />
     
       <Route path="/Shoes" element={<Shoes/>}>
       <Route index element={<Sandals />} />

       <Route path="Boots" element={<Boots/>}/>
       <Route path="Sandals" element={<Sandals/>}/>
       <Route path="Formal" element={<Formal/>}/>
       <Route path="Sneakers" element={<Sneakers/>}/>

      </Route>
      
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>

      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
         
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </main>
    
     <Footer />
    </div>
  );
}

export default App;
