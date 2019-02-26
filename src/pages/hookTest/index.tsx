/*
 * @Author: 李雁辉
 * @Date: 2019-02-19 16:28:59
 * @Last Modified by: 李雁辉
 * @Last Modified time: 2019-02-26 10:53:43
 */
import React, {
    useDebugValue,
    useEffect,
    useLayoutEffect,
    useState,
} from 'react'

import styles from './index.module.css'

interface Iprops {
    path: string
    name: string
}

const HookTest: React.SFC<Iprops> = ({ path, name }) => {
    const [num, setNum] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)
    const [{ name: names, age }, setObj] = useState<{
        name: string
        age: number
    }>({ name: '李雁辉', age: 18 })

    const setNumCb = (e: React.MouseEvent) => {
        console.log(e.target)
        setNum(num => num + 1)
    }

    const setNumCb2 = (e: React.MouseEvent) => {
        console.log(e.target)
        setNum2(num2 => num2 + 1)
    }

    // FIXME:hooks错误使用示范, 测试tslint插件检测
    if (num > 12) {
        const [a, setA] = useState<number>(0)
    }
    //
    useEffect(() => {
        console.log(num, num2)
        return () => {
            console.log('卸载', num, num2)
        }
    }, [])
    // TODO: 带dom操作副作用的hooks
    useLayoutEffect(() => {
        document.title = `第 ${num} 页`
        console.log(12)
    }, [num])

    return (
        <div style={{ height: '200px', width: '200px', color: 'red' }}>
            <div className={styles.title} onClick={setNumCb}>
                {num}{' '}
            </div>
            <div onClick={setNumCb2}>{num2} </div>
            {num ** num2}
        </div>
    )
}

export default HookTest
