import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import { models, RootModel } from 'src/controller'

const customDevtoolOptions = { disabled: process.env.NODE_ENV === 'production' }
export const store = init({
    // name: 'init',
    plugins: [immerPlugin<RootModel>()],
    models,
    redux: {
        devtoolOptions: customDevtoolOptions,
    },
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
