import './App.css'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
import Portfolio from './component/Portfolio/Portfolio'
import Pricing from './component/Pricing/Pricing'
import Resume from './component/Resume/Resume'
import Services from './component/Services/Services'
import Sidebar from './component/Sidebar/Sidebar'
import Testimonials from './component/Testimonials/Testimonials'
function App() {
  

  return (
    <>
    <Sidebar/>
    <div className="main">
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Blog/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
    </div>
      
    </>
  )
}

export default App
