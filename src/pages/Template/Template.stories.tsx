import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Template', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Stories', () => <div />)
