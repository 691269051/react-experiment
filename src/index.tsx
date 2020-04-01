/*
 * @Author: 李雁辉
 * @Date: 2019-01-09 10:51:26
 * @Last Modified by: 李雁辉
 * @Last Modified time: 2020-01-13 14:51:23
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './router'
import * as serviceWorker from './serviceWorker'
import { store } from './store'

const onRenderCallback: React.ProfilerOnRenderCallback = (
    id, // 发生提交的 Profiler 树的 "id"
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
) => {
    console.log('application--Profiler----start----')
    console.log(id)
    console.log(phase)
    console.log(actualDuration)
    console.log(baseDuration)
    console.log(startTime)
    console.log(commitTime)
    console.log(interactions)
    console.log('application--Profiler-----end---')
}

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <React.Profiler id="application" onRender={onRenderCallback}>
                <App />
            </React.Profiler>
        </React.StrictMode>
    </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
