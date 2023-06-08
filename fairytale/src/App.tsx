import Navbar from "./views/Navbar"
import { useState,useEffect } from "react"
import { SelectedPage } from "./shared/types"
import Home from "./views/Home";
import Benifits from "./views/Benifits"
import OurClasses from "./views/OurClasses"
import Contact from "./views/Contact";
import Footer from "./views/Footer";


function App() {
   const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
   const [isTop,setIsTop] = useState<boolean>(true);
  
   useEffect(()=>{
     const handleScroll =  ()=>{
       if (window.scrollY === 0 ){
         setIsTop(true);
         setSelectedPage(SelectedPage.Home);
 
       }
      if(window.scrollY !==0) setIsTop(false);
     }
     window.addEventListener("scroll",handleScroll);
     return()=>window.removeEventListener("scroll",handleScroll)
   },[])

  return (
    <div className="app  bg-gray-20">
  <Navbar
  isTop={isTop}
  selectedPage={selectedPage}
  setSelectedPage={setSelectedPage}
  />
  <Home setSelectedPage={setSelectedPage}/>
  <Benifits setSelectedPage={setSelectedPage}/>
  <OurClasses setSelectedPage={setSelectedPage}/>
  <Contact setSelectedPage={setSelectedPage}/>
  <Footer />

    </div>

  )
}

export default App
