import { NavbarSectionHome } from './components/navbar.jsx'
import { SidebarSectionHome } from './components/sidebar.jsx'
import { PostsSectionHome } from './components/posts.jsx'
import { RightSide } from './components/rightside.jsx'
import { StoriesSectionHome } from './components/stories.jsx'
import { FirstSectionHome } from './components/section1.jsx'



export const Home = () => {
    return (
        <>  
            <FirstSectionHome/>
            
            
            <NavbarSectionHome/>
            <div className='dark bg-[--lighter] h-[15vh] max-[430px]:h-[10vh]'>
                
            </div>
            <SidebarSectionHome/>
            <RightSide/>
            <PostsSectionHome/>
            
        </>
    )
}
