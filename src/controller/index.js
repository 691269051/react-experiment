import { init } from '@rematch/core';
// import { init } from 'anujs/dist/Rematch';

import count from './count';

const customDevtoolOptions = { disabled: false };

const store = init({
    name: 'init',
    models: { count },
    redux: {
        devtoolOptions: customDevtoolOptions
    }
});
export default store;
