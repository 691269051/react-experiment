import React from 'react';

class RenderProps extends React.PureComponent {
    state = {
        index: 0
    };

    componentDidMount() {
        console.log(this._reactInternalFiber);
    }

    render() {
        return <>{this.props.children(this.state, this.props, this)}</>;
    }
}

export default RenderProps;
