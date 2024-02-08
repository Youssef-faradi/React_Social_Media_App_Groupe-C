import { Home } from './pages/Home/home.jsx';
import { Market } from './pages/Market/market.jsx';
import { People } from './pages/People/people.jsx';
import { Profile } from './pages/Profile/profile.jsx';
import { LogIn } from './pages/LogIn/login.jsx';
import { Forme } from './pages/Forme/forme.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { MyProvider } from './utils/ContextProvider.jsx';
import { SectionSetting } from './pages/Setting/components/sectionSetting.jsx';
import { Sectionteam } from './pages/Team/components/sectionTeam.jsx';


function App() {

    return (
        <>
            <MyProvider>
                <Routes>
                    <Route path='/*' element={<Error />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/market' element={<Market />} />
                    <Route path='/people' element={<People />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/form' element={<Forme />} />
                    <Route path='/setting' element={<SectionSetting />} />
                    <Route path='/team' element={<Sectionteam />} />
                </Routes>
            </MyProvider>
        </>
    );
}

export default App;
