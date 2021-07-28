import React from 'react';

const RetryButton = props => {
    return (
        <div>
            <button onClick={props.onRestart}>Reset</button>
        </div>
    );
};

export default RetryButton;