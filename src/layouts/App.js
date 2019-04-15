import React from 'react';

import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <div id="main-layout" className="container">
                <Header/>
                <Home/>
                <Resume/>
                <Work/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;