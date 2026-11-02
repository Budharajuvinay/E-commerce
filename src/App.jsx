
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/Cart'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import { Route, Routes } from 'react-router'

function App() {


  return (
    <div className='con'>

      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
