import React, { useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { GeneralPages } from './utils/pageLinks'

const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }, []);
  
  return (
   <BrowserRouter>
   <Routes>
    {GeneralPages.map((item,index) =>(
      <Route key={index} path={item.path} element={<item.component/>}/>
    ))}
   </Routes>
   </BrowserRouter>
  )
}

export default App