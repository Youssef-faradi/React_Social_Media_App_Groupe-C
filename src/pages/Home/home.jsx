import { FirstSectionHome } from "./components/section1"
import { NavbarSectionHome } from './components/navbar.jsx'
import { SidebarSectionHome } from './components/sidebar.jsx'
import { PostsSectionHome } from './components/posts.jsx'
import { StoriesSectionHome } from './components/stories.jsx'


export const Home = () => {
    return (
        <>  
            
            <NavbarSectionHome/>
            <div className='h-[10vh]'>
                
            </div>
            <SidebarSectionHome/>
            <StoriesSectionHome/>
            <PostsSectionHome/>
        </>
    )
}
