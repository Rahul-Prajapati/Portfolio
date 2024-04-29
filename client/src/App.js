import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Homepage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from './redux/portfolio_dataSlice';
import Admin from './pages/Admin/Admin';
import Login from './pages/Admin/Login';
function App() {

  const dispatch = useDispatch();
  const {loading, portfolioData, reloadData } = useSelector((state)=> state.root);

  const getPortfolioData = async () => {
    try {
      const res = await fetch("/api/portfolio/get-portfolio-data"
      ,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },     
      }
      );
      const data = await res.json();
      dispatch(SetPortfolioData(data));
      dispatch(ReloadData(false));
    } catch (error) {
      console.log(error.message);
      console.log(error)
    }
  }

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    } 
  },[reloadData]);

  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData();
    } 
  },[portfolioData]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
