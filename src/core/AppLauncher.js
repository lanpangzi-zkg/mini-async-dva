import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const effectsMap = {};

const store = createStore((state, action) => {
    const { type, payload = {} } = action;
    const { namespace, effects, initalState, updateState } = payload;
    if (type === '@@redux/register') {
        effectsMap[namespace] = effects;
        return Object.assign({}, state, { [namespace]: initalState });
    }
    if (type === '@@redux/update') {
        return Object.assign({}, state, { [namespace]: Object.assign({}, state[namespace], updateState) }); 
    }
    if (type.includes('/') && !type.includes('@@redux/INIT')) {
        const [ sliceNameSpace, effect ] = type.split('/');
        if (effectsMap[sliceNameSpace] && effectsMap[sliceNameSpace][effect]) {
            executeAsyncTask(state, sliceNameSpace, effectsMap[sliceNameSpace][effect], payload);
        }
    }
    return state;
}, {});

async function executeAsyncTask(state, namespace, fn, payload) {
    const response = await fn.call(state[namespace], payload);
    store.dispatch({
        type: '@@redux/update',
        payload: {
            namespace,
            updateState: response,
        }
    });
}

function AppLauncher({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default AppLauncher;