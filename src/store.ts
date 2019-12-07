import { init } from '@rematch/core'
import * as models from 'controller'
import { RematchRootDispatch, RematchRootState } from '@hardfist/rematch'

const customDevtoolOptions = { disabled: false }
export const store = init({
    // name: 'init',
    models,
    redux: {
        devtoolOptions: customDevtoolOptions,
    },
})

export type Store = typeof store
export type RootState = RematchRootState<typeof models>

export type RootDispatch = RematchRootDispatch<typeof models>
