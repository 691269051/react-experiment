import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./router";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from "./store";
import Loading from "@uw/rcnext/components/loading";

const onRenderCallback: React.ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
) => {
    console.group();
    console.log("application--Profiler----start----");
    console.log(`发生提交的 Profiler 树的 "id":${id}`);
    console.log(`"mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）:${phase}`);
    console.log(`本次更新 committed 花费的渲染时间:${actualDuration}`);
    console.log(`估计不使用 memoization 的情况下渲染整颗子树需要的时间:${baseDuration}`);
    console.log(`本次更新中 React 开始渲染的时间:${startTime}`);
    console.log(`本次更新中 React committed 的时间:${commitTime}`);
    console.log(`属于本次更新的 interactions 的集合:${interactions}`);
    console.log("application--Profiler-----end---");
    console.groupEnd();
};

const rootElement = document.getElementById("root") as HTMLElement;

const app = (
    <React.StrictMode>
        <React.Profiler id="application" onRender={onRenderCallback}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </React.Profiler>
    </React.StrictMode>
);
ReactDOM.createRoot(rootElement).render(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
    onUpdate: (registration) => {
        console.info(
            `${registration} onUpdate registration?.waiting?.postMessage${registration?.waiting?.postMessage}`,
        );
        registration?.waiting?.postMessage({
            type: "SKIP_WAITING",
        });
        const reload = window.confirm("网站有了新的更新,请升级!");
        if (reload) {
            window.location.reload();
        }
    },
    onSuccess: (registration) => {
        console.info(`${registration} onSuccess`);
    },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const log = (arg: any) => {
    console.log("========WebVitals START========");
    console.log(arg);
    console.log("========WebVitals END========");
};
reportWebVitals(log);
