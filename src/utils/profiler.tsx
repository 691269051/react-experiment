import React from "react";

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
    console.log(`"mount" （加载） 或者 "update" （重渲染）:${phase}`);
    console.log(`本次更新 committed 花费的渲染时间:${actualDuration}`);
    console.log(`估计不使用 memoization 的情况下渲染整颗子树需要的时间:${baseDuration}`);
    console.log(`本次更新中 React 开始渲染的时间:${startTime}`);
    console.log(`本次更新中 React committed 的时间:${commitTime}`);
    console.log(`属于本次更新的 interactions 的集合:${interactions}`);
    console.log("application--Profiler-----end---");
    console.groupEnd();
};

const createProfiler =
    (Component: React.FC) =>
    (props: React.ComponentProps<typeof Component>) => {
        return (
            <React.Profiler id={Component.name} onRender={onRenderCallback}>
                <Component {...props} />
            </React.Profiler>
        );
    };


export default createProfiler;
