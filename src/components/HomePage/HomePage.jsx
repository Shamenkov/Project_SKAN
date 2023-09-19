import './HomePage.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import SearchPage from '../searchPage/SearchPage';
import ResultPage from '../ResultPage/ResultPage';
import { Route, Routes } from 'react-router';
import MobileMain from '../mobileMain/mobileMain';
import Price from '../emptyPages/price';
import FAQ from '../emptyPages/FAQ';

function HomePage() {
  return (
    <>
      <div className='Header'><Header /></div>
      <Routes>
        <Route path='/'  element={<Main />}></Route>
        <Route path='/MobileMain'  element={<MobileMain />}></Route>
        <Route path='/Price'  element={<Price />}></Route>
        <Route path='/FAQ'  element={<FAQ />}></Route>
        <Route path='/LoginPage' element={<LoginPage />}></Route>
        <Route path='/Search_Page'  element={<SearchPage />}></Route>
        <Route path='/ResultPage' element={<ResultPage/>}></Route> 
      </Routes>  
      <div  className='Footer' ><Footer /></div>
    </> 
  );
}

export default HomePage;