import { NavbarSectionHome } from './components/navbar.jsx'
import { SidebarSectionHome } from './components/sidebar.jsx'
import { PostsSectionHome } from './components/posts.jsx'
import { StoriesSectionHome } from './components/stories.jsx'
import { FirstSectionHome } from './components/section1.jsx'


export const Home = () => {
    return (
        <>  
            <FirstSectionHome/>
            
            
            <NavbarSectionHome/>
            <div className='h-[10vh]'>
                
            </div>
            <SidebarSectionHome/>
            <StoriesSectionHome/>
            <PostsSectionHome/>
        </>
    )
}
