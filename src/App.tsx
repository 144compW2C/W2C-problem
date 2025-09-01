import React, { useState } from 'react'
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
import CreateProblem from './pages/CreateProblem'
import CreateProblemDetail from './pages/CreateProblem/detail'
import Header from './components/Header/Header'

const MainLayout: React.FC = () => {
    const [state, setState] = useState<boolean>(true)

    return (
        <main>
            <Header void={() => setState(!state)} state={state} />
            <div
                style={{
                    marginLeft: state ? '240px' : '0px',
                    transition: 'all',
                    transitionDuration: '.4s',
                    paddingTop: '50px',
                }}
            >
                <Outlet />
            </div>
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
                <Route path="/createProblem" element={<CreateProblem />} />
                <Route
                    path="/createProblem/detail"
                    element={<CreateProblemDetail />}
                />
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
