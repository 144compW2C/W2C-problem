import React, { useEffect, useState } from 'react'
import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Problems from './pages/Problems'
import CreateProblem from './pages/CreateProblem'
import CreateProblemDetail from './pages/CreateProblem/detail'
import Header from './components/Header/Header'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { UserCookieFmt0001VO } from './models/entity/client/fmt/UserCookieFmt0001VO'
import { getCookie, getToken } from './utils/getCookie'

const RequireAuth: React.FC = () => {
    const token = getToken('W2CToken')
    const hasToken =
        !!token && token !== 'undefined' && token !== 'null' && token !== ''
    return hasToken ? <Outlet /> : <Navigate to="/login" replace />
}

const MainLayout: React.FC = () => {
    const [state, setState] = useState<boolean>(true)
    const [user, setUser] = useState<UserCookieFmt0001VO.Type | undefined>(
        undefined,
    )

    useEffect(() => {
        const userStr = getCookie('user')
        const user: UserCookieFmt0001VO.Type = userStr
            ? JSON.parse(userStr)
            : null

        setUser(user)
    }, [])

    console.log(user)

    return (
        <main>
            <Header void={() => setState(state)} state={state} user={user} />
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
            <Route path="/signup" element={<Signup />} />
            <Route element={<RequireAuth />}>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="problem" element={<Problems />} />
                    <Route path="createProblem" element={<CreateProblem />} />
                    <Route
                        path="createProblem/detail"
                        element={<CreateProblemDetail />}
                    />
                    <Route path="admin" element={<Admin />} />
                </Route>
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
