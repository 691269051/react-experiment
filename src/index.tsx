/*
 * @Author: 李雁辉
 * @Date: 2019-01-09 10:51:26
 * @Last Modified by: 李雁辉
 * @Last Modified time: 2020-01-13 14:51:23
 */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './router'
import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { store } from './store'
import Loading from 'components/loading'

const onRenderCallback: React.ProfilerOnRenderCallback = (
    id, // 发生提交的 Profiler 树的 "id"
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions, // 属于本次更新的 interactions 的集合
) => {
    // console.log('application--Profiler----start----')
    // console.log(id)
    // console.log(phase)
    // console.log(actualDuration)
    // console.log(baseDuration)
    // console.log(startTime)
    // console.log(commitTime)
    // console.log(interactions)
    // console.log('application--Profiler-----end---')
}

const rootElement = document.getElementById('root') as HTMLElement

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <React.Profiler id="application" onRender={onRenderCallback}>
                <Suspense fallback={<Loading />}>
                    <App />
                </Suspense>
            </React.Profiler>
        </React.StrictMode>
    </Provider>
)
ReactDOM.createRoot(rootElement).render(app)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
    onUpdate: (registration) => {
        console.info(`${registration} onUpdate registration?.waiting?.postMessage${registration?.waiting?.postMessage}`)
        registration?.waiting?.postMessage({ type: 'SKIP_WAITING' })
        const reload = window.confirm('网站有了新的更新,请升级!')
        if (reload) {
            window.location.reload()
        }
    },
    onSuccess: (registration) => {
        console.info(`${registration} onSuccess`)
    },
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const log = (arg: any) => {
    console.log('========WebVitals START========')
    console.log(arg)
    console.log('========WebVitals END========')
}
reportWebVitals(log)
