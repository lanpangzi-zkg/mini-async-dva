import React, { useEffect } from 'react';
import model from '@/model';

function Home({ dispatch, home: { count } }) {
    useEffect(() => {
        dispatch({
            type: 'home/fetchList',
            payload: {
                id: '1'
            },
        });
    }, []);
    return (
        <div>
            {count}
            <button onClick={() => {
                dispatch({
                    type: 'home/addCount',
                    payload: 1,
                });
            }}>add</button>
        </div>
    );
}

export default model('home', 'foo')(Home);