// import {Routes,Route} from 'react-router-dom'
// import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Update from './components/Update'
import Create from './components/Create'
import Admin from './pages/Admin'
import ShowOne from './components/ShowOne'
import Home from './pages/Home'
import Wishlist from './components/Wishlist'
import Card from './components/Card'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import RegisterAdmin from './components/RegisterAdmin'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DashboardUsers from './components/DashboardUsers'
function App() {
  const [loggedUser, setLoggedUser] = useState(null); // Initialize loggedUser state
  const token = localStorage.getItem('token')
  useEffect(() => {
    const GetLoggedUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user', { withCredentials: true });
        console.log('Server Response:', response);

        const { token, loggedUser } = response.data;
        setLoggedUser(loggedUser);
      } catch (error) {
        console.log('Frontend Request Error:', error);
      }
    };

    if (token) {
      GetLoggedUser();
    }
  }, [token]);

  return (
    <section className='min-h-screen dark:text-gray-100 dark:bg-slate-900 duration-100' >
      < Navbar loggedUser={loggedUser} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/product/:id/edit"} element={<Update />} />
        <Route path={"/product/new"} element={<Create />} />
        <Route path={"/product/:id"} element={<ShowOne />} />
        <Route path={"/product/favorite"} element={<Wishlist />} />
        <Route path={"/product/cart"} element={<Card />} />
        <Route path={'/login'} element={<Login setLoggedUser={setLoggedUser}/>} />
        <Route path={'/register'} element={<Register setLoggedUser={setLoggedUser} />} />
        <Route path={'/goback'} element={<Home />} />
        <Route path={'/admin/register'} element={<RegisterAdmin setLoggedUser={setLoggedUser} />} />
        <Route path={'/admin/users'} element={<DashboardUsers />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
