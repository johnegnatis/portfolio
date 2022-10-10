import React from 'react';
import { Outlet} from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <div style={{fontFamily: 'Heebo'}} className='relative min-h-screen'>

                <div className='lg:px-36 xl:px-56'>
                    <h1 className='top-5 left-5 md:left-20 lg:left-40 absolute italic text-xl' style={{fontFamily: 'Sacramento'}}>John Egnatis</h1>
                    <Header/>
                </div>
                <Outlet/>

                
            <Footer/>
        </div>
    );
}

export default App;
