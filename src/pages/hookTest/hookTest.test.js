import React from 'react'
import { render } from '@testing-library/react'
import HookTest, { number3 } from '.'

it('renders welcome message', () => {
    render(<HookTest path="/" name={'你好'} />)
})

it('测试 reducer', () => {
    let state = { count: 3 }
    // 输入 count:3, 执行 increment 结果 count4
    state = number3(state, { type: 'increment' })
    expect(state).toEqual({ count: 4 })
    // 输入 count:4, 执行 decrement 结果 count3
    state = number3(state, { type: 'decrement' })
    expect(state).toEqual({ count: 3 })
})
