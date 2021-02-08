import { createModel } from '@rematch/core'
import { delay } from './utils'
import { RootModel } from '.'
export const count = createModel<RootModel>()({
    state: 0,
    reducers: {
        add: (state, payload: number) => {
            return state + payload
        },
    },
    effects: (dispatch) => ({
        async incrementAsync() {
            await delay(2000)
            dispatch.count.add(1)
        },
    }),
})
