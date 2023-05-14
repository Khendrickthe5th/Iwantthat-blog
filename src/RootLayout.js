import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';

function RootLayout(){
    return(
        <div>
            <Header />
                    <main>
                        <Outlet />
                    </main>  
            <Footer />
        </div>
    )
}

export default RootLayout;