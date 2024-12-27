import './App.css'
import Navbar from './Components/Navbar'
import "./assets/css/style.css"
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
import Product from './Components/Product'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Footer from './Components/Footer'



function App(){
  return (
    <>
    <Navbar></Navbar>
    <Home/>
    <About/>
    <Menu/>
    <Product/>
    <Review/>
    <Contact/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
