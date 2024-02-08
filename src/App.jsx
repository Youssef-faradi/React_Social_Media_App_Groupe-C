import { Home } from './pages/Home/home.jsx';
import { Market } from './pages/Market/market.jsx';
import { People } from './pages/People/people.jsx';
import { Profile } from './pages/Profile/profile.jsx';
import { LogIn } from './pages/LogIn/login.jsx';
import { Forme } from './pages/Forme/forme.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { Product } from './pages/Products/product.jsx';
import { MyProvider } from './utils/contextProvider.jsx';
import { Group } from './pages/group_page/group.jsx';
import { Details } from './pages/group_details/details.jsx';
import { Events } from './pages/events/events.jsx';
import { Events2 } from './pages/events2/events2.jsx';

import { SectionSetting } from './pages/Setting/components/sectionSetting.jsx';
import { Sectionteam } from './pages/Team/components/sectionTeam.jsx';


function App() {

    return (
        <>
            <MyProvider>
                <Routes>
                    <Route path='/*' element={<Error />} />
                    <Route path='/home/:id' element={<Home />} />
                    <Route path='/market' element={<Market />} />
                    <Route path='/people' element={<People />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/profile/:idUser' element={<Profile />} />
                    <Route path='/' element={<LogIn />} />
                    <Route path='/form' element={<Forme />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/events' element={< Events />} />
                    <Route path='/events2' element={< Events2 />} />
                    <Route path='/setting' element={<SectionSetting />} />

                    <Route path='/groups' element={<Group />} />
                    <Route path='/details' element={<Details />} />
                    <Route path='/team' element={<Sectionteam />} />

                    <Route path='/groups' element={<Group />} />
                    <Route path='/details' element={<Details />} />

                </Routes>
            </MyProvider>
        </>
    );
}

export default App;


