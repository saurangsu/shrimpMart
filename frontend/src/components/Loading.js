import React from 'react';
import { BallBeat } from 'react-pure-loaders';

const Loading = () => {
    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <BallBeat
                color={'#123abc'}
                loading='true'
            />
        </div>
    );
}

export default Loading;