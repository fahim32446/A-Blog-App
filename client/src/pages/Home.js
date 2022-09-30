import React from 'react'
import Navbar from '../components/Navbar'
import Front_Page from './Front_Page'
import Post from './Post'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from '../admin/AdminLogin';
import AdminSignUp from '../admin/AdminSignUp';
import AdminDashboard from '../admin/AdminDashBoard/AdminDashboard';
import AddNewPost from '../admin/AddNewPost';
import AllPosts from '../admin/AllPosts';

const Home = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Front_Page />} />
          <Route path='/Home/' element={<Post />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/signup' element={<AdminSignUp />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/addPost' element={<AddNewPost />} />
          <Route path='/allPosts' element={<AllPosts />} />
          <Route path='/update/:id' element={<AddNewPost />} />
          <Route path='/update/' element={<AddNewPost />} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default Home