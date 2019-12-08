import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import * as models from 'controller'
import { RematchRootDispatch, RematchRootState } from 'controller/util'
const immer = immerPlugin()

const customDevtoolOptions = { disabled: false }
export const store = init({
    name: 'init',
    plugins: [immer],
    models,
    redux: {
        devtoolOptions: customDevtoolOptions,
    },
})

export type Store = typeof store
export type RootState = RematchRootState<typeof models>

export type RootDispatch = RematchRootDispatch<typeof models>
