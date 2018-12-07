import produce from 'immer';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, iRootState } from 'src/store';

import styles from './index.module.css';

interface ownProps {
    name: string;
    path: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // add: dispatc,
    incrementSharksAsync2: () =>
        dispatch({ type: 'count/increment', payload: 2 }),
});

const mapStateToProps = (state: iRootState) => ({
    count: state.count,
});

type connectedProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    ownProps;
type Props = connectedProps;

const User = (props: Props): JSX.Element => {
    const [count, setCount] = React.useState(0);
    const { name } = props;

    return (
        <>
            <div
                className={styles.show}
                onClick={() =>
                    setCount(
                        produce(prevCount => {
                            prevCount + 1;
                        })
                    )
                }
            >
                {count}
            </div>
            <div>{name}</div>
        </>
    );
};

export default connect(
    mapStateToProps as any,
    mapDispatchToProps as any
)(User);
