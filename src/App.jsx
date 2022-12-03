import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Conocenos from './pages/Conocenos'
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/conocenos", element: <Conocenos /> },
  ])

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        {/*<Routes>
          <Route path="/" element={<Home />} />
          <Route path="conocenos" element={<Conocenos />} />
        </Routes>*/}
        <RouterProvider router={router} />
      </main>
    </>
  )

}

export default App;
