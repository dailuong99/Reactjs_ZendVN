import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { AppRouters } from './AppRouter';


export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouters></AppRouters>
      <Footer></Footer>
    </div>
  );
}