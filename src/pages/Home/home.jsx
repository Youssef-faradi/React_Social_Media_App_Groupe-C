import { NavbarSectionHome } from './components/navbar.jsx'
import { SidebarSectionHome } from './components/sidebar.jsx'
import { PostsSectionHome } from './components/posts.jsx'
import { RightSide } from './components/rightside.jsx'
import { StoriesSectionHome } from './components/stories.jsx'
import { FirstSectionHome } from './components/section1.jsx'
import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../utils/ContextProvider.jsx'
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
            <FirstSectionHome  />
            
            
            <NavbarSectionHome  />
            <div className='dark bg-[--lighter] h-[15vh] max-[430px]:h-[10vh]'>
                
            </div>
            <SidebarSectionHome />
            <RightSide />
            <PostsSectionHome />
            
        </>
    )
}
