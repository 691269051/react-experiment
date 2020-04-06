import React, { Suspense } from 'react'
import Loading from 'component/loading'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom'
import HookTest from 'pages/hookTest'
import BraftEditor from 'pages/BraftEditor'
import RouterHook from 'pages/RouterHook'

import {} from 'react-router-dom'

const NotFound: React.FC<{}> = () => {
    return <div>404</div>
}

const Hook = () => {
    let match = useRouteMatch({
        path: '/BLOG/:slug/',
        strict: true,
        sensitive: true,
    })
    console.log(match)
    return (
        <div>
            {/* ... */}
            {match ? <HookTest match={match} /> : <NotFound />}
        </div>
    )
}

const Routers: React.FC<{}> = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    {/* <Hook /> */}
                    <Route path="/BraftEditor">
                        <BraftEditor />
                    </Route>
                    <Route path="/routerhooktest/:id">
                        <RouterHook />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    )
}
const App = Routers

export default App
