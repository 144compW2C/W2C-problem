import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Login from './pages/Login/page'
import Home from './pages/Home/page'
import NotFound from './pages/NotFound/page'
import Problems from './pages/Problems/page'
import Header from './components/Header/Header'

const MainLayout: React.FC = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problems />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </>,
  ),
)

export const App: React.FC = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
