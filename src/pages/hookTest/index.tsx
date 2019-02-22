/*
 * @Author: 李雁辉
 * @Date: 2019-02-19 16:28:59
 * @Last Modified by: 李雁辉
 * @Last Modified time: 2019-02-19 17:16:28
 */

import React, { useState, useDebugValue } from 'react'

interface Iprops {
    path: string
    name: string
}

const useTimeout = (friendID: string) => {
    const [isOnline, setIsOnline] = useState<boolean>(false)
    useDebugValue(isOnline ? 'Online' : 'Offline')
    return isOnline ? 'Online' : 'Offline'
}

const HookTest: React.SFC<Iprops> = ({ path, name }) => {
    const [num, setNum] = useState<number>(0)

    const setNumCb = (e: React.MouseEvent) => {
        // const a = useTimeout('1111')
        console.log(e.target)
        setNum(num => num + 1)
    }

    if (true) {
        const a = useTimeout('1111')
    }

    return (
        <div
            style={{ height: '200px', width: '200px', color: 'red' }}
            onClick={setNumCb}
        >
            {num} /dd {1}
        </div>
    )
}

export default HookTest
