import { init, RematchRootState } from '@rematch/core'
import models from 'controller'

const customDevtoolOptions = { disabled: false }
export const store = init({
    // name: 'init',
    models,
    redux: {
        devtoolOptions: customDevtoolOptions,
    },
})

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>
