import React, { useState } from 'react'
import { ReactEditor } from 'slate-react'
import PlainTextExample from './plainText'
import styles from './index.module.less'
export default () => {
    const [a, setA] = useState(1)

    return (
        <div className={styles.add}>
            asd12{a}
            <PlainTextExample />
        </div>
    )
}
