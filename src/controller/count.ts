import { createModel } from '@rematch/core'
export type countState = number
const count = {
    state: 0,
    reducers: {
        increment: (state: countState, payload: number): countState =>
            state + payload,
    },
    effects: (dispatch: any) => ({
        incrementAsync: async (payload: number) => {
            await new Promise(resolve => setTimeout(resolve, 2000))
        },
    }),
}

export default count
