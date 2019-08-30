/*
 * @Author: 李雁辉
 * @Date: 2019-01-09 10:51:26
 * @Last Modified by: 李雁辉
 * @Last Modified time: 2019-08-09 16:15:19
 */
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
import App from './routers'
import { store } from './store'

const onRenderCallback = (...arg: any[]) => {
    console.log('arg----start----')
    console.log(arg)
    console.log('arg-----end---')
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <React.Profiler id="application" onRender={onRenderCallback}>
                <App />
            </React.Profiler>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
