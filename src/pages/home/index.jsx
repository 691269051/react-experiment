import { Button } from 'antd'
import produce from 'immer'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'
import styles from './home.module.css'
import RanderProps from './RenderProps'

// import { Link } from '@reach/router';
const H1 = styled.h1`
    color: blue;
    height: ${props => props.num + 24}px;
    font-size: ${props => props.num + 24}px;
    line-height: 1.5;
    /* line-height:1; */
`

class Home extends PureComponent {
    addOne = () => {
        this.props.addOne()
        _.add(1, 2)
        // this.setState(
        //     produce(draft => {
        //         draft.num += 1;
        //     })
        // );
        // console.log(this._state)
        this._setState &&
            this._setState.setState(
                produce(draft => ({
                    index: draft.index + 1,
                }))
            )
    }

    _setState = null

    render() {
        let { count } = this.props
        // let { num } = this.state;
        // console.log(this.props.location.state);
        return (
            <div className={styles.ddd}>
                <div style={{ color: 'red' }}>dddd1234</div>
                <h1>{count}</h1>
                {/* <h2>dddd</h2> */}
                {/* <Button onClick={get} type="dashed">
                    get data
                </Button> */}
                {/* </Link> */}
                <Button type="primary" className="" onClick={this.addOne}>
                    加1
                </Button>
                <H1 num={count}>實驗1</H1>
                {this.props.children}
                <RanderProps>
                    {(state, props, setState) => {
                        this._setState = setState
                        this._state = state
                        return (
                            <div className={styles.show}>
                                RanderProps {state.index}
                            </div>
                        )
                    }}
                </RanderProps>
            </div>
        )
    }
}

Home.propTypes = {
    count: PropTypes.number,
    addOne: PropTypes.func,
}
const mapStateToProps = state => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => {
            dispatch.count.add(1)
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
