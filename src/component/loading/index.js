import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return <div>loading...</div>;
    }
}

const LoadingComponent = props => {
    if (props.error) {
        // 当加载出错时
        return (
            <div>
                加载出现错误! <button onClick={props.retry}>重试</button>
            </div>
        );
    } else if (props.timedOut) {
        // 当加载超时
        return (
            <div>
                加载了很长时间... <button onClick={props.retry}>重试</button>
            </div>
        );
    } else if (props.pastDelay) {
        // 加载时间过长显示loading
        return Loading;
    }
    // 加载时间极短不显示loading
    return null;
};

export default LoadingComponent;
