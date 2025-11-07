import React from 'react'
import {sidebarLinks} from "../../../data/dashboard-links"
import { useDispatch, useSelector } from 'react-redux';
import SidebarLinks from './SidebarLinks';
const Sidebar = () => {
    const{loading:authLoading, user} = useSelector((state)=>state.auth);
  return (
   <>
    <div className='border border-green-400'>
        <div>
            {
                sidebarLinks.map((link)=>{
                    if(link.type && user?.accountType !== link.type) return;
                    return(
                        <SidebarLinks key={link.id} link={link} iconName={link.icon}/>
                    )
                })
            }
        </div>
    </div>
   </>
  )
}

export default Sidebar