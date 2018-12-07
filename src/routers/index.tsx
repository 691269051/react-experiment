import React from 'react';
// import Loadable from 'react-loadable';
import Loading from 'component/loading';
import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';
import User from 'pages/user';


function N404() {
    return <div>404</div>;
}

const Routers = () => {
    return <Router>
        <React.Suspense fallback={<Loading/>}>
            <User path='/' name='userState'/>
        </React.Suspense>
    </Router>;
};
export default hot(module)(Routers);
