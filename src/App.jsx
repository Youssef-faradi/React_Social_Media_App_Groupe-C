import { Home } from './pages/Home/home.jsx';
import { Market } from './pages/Market/market.jsx';
import { People } from './pages/People/people.jsx';
import { Profile } from './pages/Profile/profile.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { Group } from './pages/group_page/group.jsx';
import { Details } from './pages/group_details/details.jsx';


function App() {
    return (
        <>  
            <Routes>
                <Route path='*' element={<Error/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/market' element={<Market/>} />
                <Route path='/people' element={<People />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/groups' element={<Group />} />
                <Route path='/details' element={<Details />} />

            </Routes>
        </>
    );
}

export default App;
