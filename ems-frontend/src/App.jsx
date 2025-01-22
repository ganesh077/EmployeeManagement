import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/add-employees' element = {<EmployeeComponent/>}></Route>
        <Route path='/edit-employees/:id' element = {<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
