import './App.css';
import { Route, Routes } from 'react-router-dom';


import About from './pages/About/About';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import NotFound from './shared/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import SignUp from './pages/Login/SignUp/SignUp';
import Login from './pages/Login/Login/Login';
import Blogs from './pages/Blogs/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import WhyChoose from './pages/Home/WhyChoose/WhyChoose';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:checkoutId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/whyChoose' element={<WhyChoose></WhyChoose>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
