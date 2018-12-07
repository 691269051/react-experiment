import { createModel } from '@rematch/core';

export type countState = number;

const count = createModel({
    state: 0,
    reducers: {
        increment: (state: countState, payload: number): countState =>
            state + payload,
    },
    effects: dispatch => ({
        async incrementAsync(payload: number) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.increment(payload);
        },
    }),
});

export default count;
