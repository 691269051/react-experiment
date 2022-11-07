import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./router";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import { store } from "./store";
// import Loading from "@uw/rcnext/components/loading";

const rootElement = document.getElementById("root") as HTMLElement;

const app = (
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
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
