import { NavbarSectionHome } from './components/navbar.jsx'
import { SidebarSectionHome } from './components/sidebar.jsx'
import { PostsSectionHome } from './components/posts.jsx'
import { RightSide } from './components/rightside.jsx'
import { StoriesSectionHome } from './components/stories.jsx'



export const Home = () => {
    return (
        <>  
            
            <NavbarSectionHome/>
            <div className='h-[15vh] max-[430px]:h-[10vh]'>
                
            </div>
            <SidebarSectionHome/>
            <RightSide/>
            <PostsSectionHome/>
            
        </>
    )
}
