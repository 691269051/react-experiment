import React, { Suspense } from 'react'
// import Loadable from 'react-loadable';
import Loading from 'component/loading'
import { hot } from 'react-hot-loader/root'
import { Router } from '@reach/router'
import User from 'pages/user'
import Home from 'pages/home'

const N404: React.SFC<{}> = () => {
    return <div>404</div>
}

const Routers: React.SFC<{}> = () => {
    let a = { title: '你好' }
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Home path="/" name="userState" />
            </Router>
        </Suspense>
    )
}
const App = hot(Routers)

export default App
