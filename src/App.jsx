import { Home } from './pages/Home/home.jsx';
import { Market } from './pages/Market/market.jsx';
import { People } from './pages/People/people.jsx';
import { Profile } from './pages/Profile/profile.jsx';
import { Forme } from './pages/Forme/forme.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';


function App() {
    return (
        <>  
            <Routes>
                <Route path='*' element={<Error/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/market' element={<Market/>} />
                <Route path='/people' element={<People />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/form' element={<Forme />} />



            </Routes>
        </>
    );
}

export default App;
