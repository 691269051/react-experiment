import { RootDispatch } from 'store'
export type countState = number
export const count = {
    state: 0,
    reducers: {
        add: (state: countState, payload: number): countState => {
            return state + payload
        },
    },
    effects: (dispatch: RootDispatch) => ({
        async incrementAsync() {
            await new Promise(resolve => setTimeout(resolve, 2000))
            dispatch.count.add(1)
        },
    }),
}
