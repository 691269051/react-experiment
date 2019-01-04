import produce from 'immer'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch, iRootState } from 'src/store'

import styles from './index.module.css'

interface Props {
    name: string
    path: string
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: dispatch.count.increment,
    incrementSharksAsync2: () => {
        return dispatch({ type: 'count/increment', payload: 2 })
    },
})

const mapStateToProps = (state: iRootState) => ({
    counts: state.count,
})

interface Props
    extends Partial<ReturnType<typeof mapStateToProps>>,
        Partial<ReturnType<typeof mapDispatchToProps>> {}

const User: React.SFC<Props> = ({ name, counts, incrementSharksAsync2 }) => {
    const [count, setCount] = React.useState(0)

    return (
        <>
            <div
                className={styles.ddd}
                onClick={() =>
                    setCount(
                        produce(prevCount => {
                            prevCount + 1
                        })
                    )
                }
            >
                {count}
            </div>
            <div>{name}</div>
        </>
    )
}

export default connect(
    mapStateToProps as any,
    mapDispatchToProps as any
)(User)
