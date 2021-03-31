import React from 'react';
import Header from './components/Header';
import MainContentFunc from './components/MainContentFunc';
// import MainContentClass from './components/MainContentClass';
import Footer from './components/Footer';


function App() {
    return (
      <div>
        <Header/>
        <MainContentFunc></MainContentFunc>
        {/* <MainContentClass></MainContentClass> */}
        <Footer />
      </div>
    );
}

export default App;