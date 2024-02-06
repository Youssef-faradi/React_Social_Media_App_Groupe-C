import { Home } from './pages/Home/home.jsx';
import { Market } from './pages/Market/market.jsx';
import { People } from './pages/People/people.jsx';
import { Profile } from './pages/Profile/profile.jsx';
import { LogIn } from './pages/LogIn/login.jsx';
import { Forme } from './pages/Forme/forme.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
<<<<<<< HEAD
import { Product } from './pages/Products/product.jsx';
import { MyProvider } from './utils/contextProvider.jsx';
=======
import { MyProvider } from './utils/ContextProvider.jsx';
>>>>>>> 2e007373d592a19b1577544ee7afac7870c32ad9

// import { MyProvider } from './utils/contextProvider.jsx';

function App() {

    return (
<<<<<<< HEAD
        <>  
        <MyProvider>

            <Routes>
                <Route path='*' element={<Error/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/market' element={<Market/>} />
                <Route path='/people' element={<People />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/form' element={<Forme />} />
                <Route path='/product/:id' element={<Product/>} />
            </Routes>

        </MyProvider>
=======
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
                </Routes>
            </MyProvider>
>>>>>>> 2e007373d592a19b1577544ee7afac7870c32ad9
        </>
    );
}

export default App;


