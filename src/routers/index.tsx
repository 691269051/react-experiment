import React from 'react'
// import Loadable from 'react-loadable';
import Loading from 'component/loading'
import { hot } from 'react-hot-loader'
import { Router } from '@reach/router'
import User from 'pages/user'

function N404() {
    return <div>404</div>
}

const Routers = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Router>
                <User path="/" name="userState" />
            </Router>
            ;
        </React.Suspense>
    )
}
export default hot(module)(Routers)
