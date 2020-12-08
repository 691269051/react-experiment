import React, { useCallback } from 'react'
import BraftEditor from 'pages/BraftEditor'
import HookTest from 'pages/hookTest'
import RouterHook from 'pages/RouterHook'
import Slate from 'pages/Slate'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    useMatch,
    Outlet,
} from 'react-router-dom'

const NotFound: React.FC<{}> = () => {
    return <div>404</div>
}

const Hook = (): JSX.Element => {
    let match = useMatch({
        path: '/BLOG/:slug/',
    })

    const ddd = useCallback((): void => {
        console.log(match)
    }, [match])
    return (
        <div>
            {/* ... */}
            {match ? <HookTest match={match} /> : <NotFound />}
        </div>
    )
}

const Routers: React.FC<{}> = () => {
    return (
        <Router>
            <Routes>
                <Hook />
                {/* <Route path="/BraftEditor">
                        <BraftEditor />
                    </Route> */}
                <Route path="/Slate" element={<Slate />} />
                <Route path="/hooktest" element={<HookTest />} />
                <Route
                    key="12"
                    path="/routerhooktest"
                    element={<RouterHook />}
                />
            </Routes>
        </Router>
    )
}
const App = Routers

export default App
