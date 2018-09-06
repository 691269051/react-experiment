// import produce from 'immer';
// import store from './index';

// const {dispatch={}} = store;

export default {
    state: 0,
    reducers: {
        adds: (state, payload) => state + payload
    },
    effects:(dispatch) =>( {
        add: async (state, payload) => {
            let a = await new Promise( (resolve, reject) => {
                setTimeout(() => {
                    resolve(1);
                }, 3000);
            })
            console.log(a);
            dispatch.count.adds(state, payload)
            // return state + payload;
        }
    })
};
