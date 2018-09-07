import Loadable from 'react-loadable';
import Loading from '../component/loading';
import { hot } from 'react-hot-loader';

import React from 'react';
import { Router } from '@reach/router';

// const Loadable = import(/* webpackChunkName: "Loadable" */ 'react-loadable');

function N404() {
    return <div>404</div>;
}

const Home = Loadable.Map({
    timeout: 10000,
    loader:{
        Home: () => import(/* webpackChunkName: "home" */ '../pages/home'),
        // i18n: () => fetch('/redirect').then(res => res.json()),
      },
      loading:Loading,
      render(loaded, props) {
        let Home = loaded.Home.default;
        let i18n = loaded.i18n;
        return <Home {...props} i18n={i18n}/>;
      }
});

const List = Loadable({
    loader: () => import(/* webpackChunkName: "List" */ '../component/List'),
    loading:Loading
});

const Routers = () => {
    return (
        <Router>
            <N404 path="*" />
            {/* <Redirect from="/" to="/home" noThrow /> */}
            <Home  path="/" />
            <List path="/List" />
        </Router>
    );
};
export default hot(module)(Routers);
