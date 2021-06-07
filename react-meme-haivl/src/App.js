import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { AppRouters } from './AppRouter';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';


export default function App() {
   const isShowLoading = useSelector(state => state.App.isShowLoading)
  return (
    <div className="App">
      <Header></Header>
      <AppRouters></AppRouters>
      <Footer></Footer>
      <Loading isShowLoading={isShowLoading}></Loading>
    </div>
  );
}