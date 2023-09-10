import './HomePage.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import SearchPage from '../searchPage/SearchPage';
import ResultPage from '../ResultPage/ResultPage';
import { Route, Routes } from 'react-router';

function HomePage() {
  return (
    <>
      <div className='Header'><Header /></div>
      <Routes>
        <Route path='/'  element={<Main />}></Route>
        <Route path='/LoginPage' element={<LoginPage />}></Route>
        <Route path='/Search_Page'  element={<SearchPage />}></Route>
        <Route path='/ResultPage' element={<ResultPage/>}></Route> 
      </Routes>  
      <div  className='Footer' ><Footer /></div>
    </> 
  );
}

export default HomePage;