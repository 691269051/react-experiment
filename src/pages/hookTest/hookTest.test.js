import { shallow } from 'enzyme'
import React from 'react'

import HookTest from '.'

it('renders without crashing', () => {
    const hookTestDom = shallow(<HookTest />)
})
