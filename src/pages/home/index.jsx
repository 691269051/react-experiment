import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { Link } from '@reach/router';
import produce from 'immer';
import { get } from './network';
import RanderProps from './RenderProps';
import { Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './home.module.css';

const H1 = styled.h1`
    color: blue;
    height: ${props => props.num + 24}px;
    font-size: ${props => props.num + 24}px;
    line-height: 1.5;
    /* line-height:1; */
`;

class Home extends PureComponent {
    addOne = () => {
        this.props.addOne();
        // this.setState(
        //     produce(draft => {
        //         draft.num += 1;
        //     })
        // );
        // console.log(this._state)
        this._setState&&this._setState.setState(produce(draft => ({
            index:draft.index+1
        })))
    };

    _setState = null;

    render() {
        let { count } = this.props;
        // let { num } = this.state;
        // console.log(this.props.location.state);
        return (
            <div className={styles.ddd}>
                <div style={{color:'red'}}>dddd1234</div>
                <h1>{count}</h1>
                {/* <h2>{num}</h2> */}
                {/* <Link to="api" replace> */}
                <Button onClick={get} type="dashed">
                    get data
                </Button>
                {/* </Link> */}
                <Button type="primary" className="" onClick={this.addOne}>
                    加1
                </Button>
                <H1 num={count}>實驗1</H1>
                {this.props.children}
                <RanderProps>
                    {(state, props, setState) => {
                        this._setState = setState;
                        this._state = state;
                        return <div className={styles.show}>RanderProps {state.index}</div>;
                    }}
                </RanderProps>
            </div>
        );
    }
}

Home.propTypes = {
    count: PropTypes.number,
    addOne: PropTypes.func
};
const mapStateToProps = state => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => {
            dispatch.count.add(1);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
