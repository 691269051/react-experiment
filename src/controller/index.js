import { init } from '@rematch/core';

import count from './count';

const customDevtoolOptions = { disabled: true };

const store = init({
    name:'init',
    models: { count },
    redux: {
        devtoolOptions: customDevtoolOptions
    }
});
export default store;
