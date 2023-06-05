import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;
}

const NavButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink className='rounded-md bg-secondary-500 px-10 py-2'
    onClick={()=>setSelectedPage(SelectedPage.Contact)}
    href={`#${SelectedPage.Contact}`}
    >{children}</AnchorLink>
  )
}

export default NavButton