import { NavbarSectionHome } from './components/navbar.jsx'
import { SidebarSectionHome } from './components/sidebar.jsx'
import { PostsSectionHome } from './components/posts.jsx'
import { RightSide } from './components/rightside.jsx'

import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../utils/contextProvider.jsx'
import { useNavigate } from 'react-router'



export const Home = () => {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)
    const navigate = useNavigate()

    console.log(dbUser[0].connected)
    useEffect(()=> {
        if (!dbUser[0].connected){
            navigate(`/`)
        }
    },[])

    
    
    
    return (
        <>  
            
            
            <NavbarSectionHome  />
            <div className=' bg-[--lighter] h-[15vh] max-[430px]:h-[10vh]'>
                
            </div>
            <SidebarSectionHome />
            <RightSide />
            <PostsSectionHome />
            
        </>
    )
}
