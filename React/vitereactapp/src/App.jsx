import React, { useState } from 'react'
import Student from './Student';
import './student.css'
import abes from './abes.jpg'
import './index.css'
import Studentstate from './Studentstate';
import UseOfState from './UseOfState';
import ImageManipulation from './ImageManipulation';
import Login from './Login';
import Registration from './Registration';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainLayout from './MainLayout';

export default function App() {   

    const [rdata, setrdata] = useState();
   
  
  return (
       
        <div>
          <BrowserRouter>
          <Routes>
          
          <Route path='/' element={<MainLayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          </Route>
          </Routes>
          </BrowserRouter>


          {/* 
          <Login loginData = {rdata}/>          
         <Registration regdata = {setrdata}/> */}
        </div>
    
  )
}
