import { RootDispatch, RootState } from 'store'
export type countState = number
export const count = {
    state: 0,
    reducers: {
        add: (state: countState, payload: number): countState => {
            debugger
            return state + payload
        },
    },
    effects: (dispatch: RootDispatch) => ({
        async incrementAsync(payload: number) {
            await new Promise(resolve => setTimeout(resolve, 2000))
        },
    }),
}
