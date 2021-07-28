import React from 'react';

const ScoreTable = props => {

    return (
        <tr>
            <th>{props.outCome}</th>
            <th>{props.firstPrize}</th>
            <th>{props.secondPrize}</th>
            <th>{props.thirdPrize}</th>
            <th>{props.fourthPrize}</th>
            <th>{props.fifthPrize}</th>
        </tr>
    );
};

export default ScoreTable;