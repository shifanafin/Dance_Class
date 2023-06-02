import { useEffect, useState } from "react"
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"; 
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "../../shared/types";

type Props = {
  selectedPage:SelectedPage,
  setSelectedPage:(value:SelectedPage)=>void
}

function Navbar({selectedPage,setSelectedPage}: Props) {
  const flexBetween = "flex items-center justify-between"
  return (
 <nav>
  <div className={`${flexBetween} fixed z-30 py-6 top-0 w-full`}>
    <div className={`${flexBetween} mx-auto w-5/6`}>
      <div className={`${flexBetween} w-full gap-16`}>
        {/* Leftside */}
        <img src={Logo} alt="Logo" />
        {/* Right side */}

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
            <button>Become a Member</button>
          </div>
        </div>
 
      </div>
    </div>
  </div>
 </nav>
  )
}

export default Navbar