import React from 'react';

class RenderProps extends React.Component {
    state = {
        index: 0,
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.index !== nextState.index) {
            return true;
        }
        if (this.props.children.toString() === nextProps.children.toString()) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        console.log(this);
        console.log(this._reactInternalFiber);
    }

    render() {
        return (
            <>
                {/* <h2>dddd</h2> */}
                {this.props.children(this.state, this.props, this)}
            </>
        );
    }
}

export default RenderProps;
