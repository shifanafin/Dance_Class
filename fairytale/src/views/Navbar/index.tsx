import { useEffect, useState } from "react"
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"; 
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavButton from "../../shared/NavButton";

type Props = {
  isTop:boolean
  selectedPage:SelectedPage,
  setSelectedPage:(value:SelectedPage)=>void
}

function Navbar({isTop,selectedPage,setSelectedPage}: Props) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled,setIsMenuToggled]= useState<boolean>(false);
 const navBackground = isTop ? "" : "bg-primary-100 drop-shadow";



  return (
 <nav>
  <div className={`${navBackground} ${flexBetween} fixed z-30 py-6 top-0 w-full`}>
    <div className={`${flexBetween} mx-auto w-5/6`}>
      <div className={`${flexBetween} w-full gap-16`}>
        {/* Leftside */}
        <img src={Logo} alt="Logo" />

        {/* Right side */}
           {isAboveMediumScreens ? (
        <div className={`${flexBetween} w-full `}>
          <div className={`${flexBetween} gap-8 text-sm`}>
            <Link
             page="Home"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
            <Link page="Benifits"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
            <Link page="Our Classes"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
            <Link page="Contact"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
          </div>
          <div className={`${flexBetween} gap-8`}>
            <p>Sign In</p>
            <NavButton setSelectedPage={setSelectedPage}>Become a Member</NavButton>
          </div>
        </div>):
                 (
                  <button className="rounded-full bg-secondary-500 p-2"
                  onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                    <Bars3Icon className="h-6 w-6 text-white"/>
                  </button>
                 )}
 
      </div>
    </div>
  </div>
  {/* Mobile menu */}
     {isMenuToggled && !isAboveMediumScreens && (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
      {/* Close Button */}
      <div className="flex justify-end p-12">
        <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
        </button>
      </div>
      <div>
        {/* Menu Items */}
      <div className="ml-[33%] flex   flex-col gap-6 text-2xl">
            <Link
             page="Home"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
            <Link page="Benifits"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
            <Link page="Our Classes"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
            <Link page="Contact"
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}/>
          </div>

      </div>
    </div>
    )}
 </nav>
  )
}

export default Navbar