import React from 'react';
import Cell from "../Cell/Cell";

const CellDesk = props => {
    const cells = props.cells.map(cell => (
        <Cell onCellClick={() => props.onCellClick(cell.id)}
              key={cell.id}
              ring={cell.ring}
              showCell={cell.clicked}
        />
    ));

    return (
        <>
            {cells}
        </>
    )
};

export default CellDesk;