import React from 'react';
import './Cell.css'

const Cell = props => {
    const cellClass = ['Cell'];
    if (props.showCell) {
        cellClass.push('Opened')
    }

    return (
        <div className={cellClass.join(' ')}
             onClick={props.onCellClick}
             key={props.id}
        >
            <span className={'Cell__text'}>{props.ring}</span>
        </div>
    )


};

export default Cell;