import {nanoid} from "nanoid";
import {useState} from 'react'

import '../Components/RingFind/RingFind.css'
import CellDesk from "../Components/RingFind/CellDesk/CellDesk";
import Tries from "../Components/RingFind/Tries/Tries";
import RetryButton from "../Components/RingFind/RetryButton/RetryButton";
import Header from "../Components/MainPage/Header/Header";

const RingFind = () => {
    const [cells, setCells] = useState([]);
    const [showTries, setTries] = useState(0);

    const onStartGame = () => {
        setTries(0);
        const myCells = [];
        for (let i = 0; i < 36; i++) {
            myCells.push({ring: '', id: nanoid(), clicked: false});
        }
        const randomCell = Math.floor(Math.random() * myCells.length);
        myCells[randomCell].ring = 'o';
        setCells(myCells);
    };

    const onCellClick = id => {
        setCells(cells.map(p => {
            if (p.id === id) {
                return {...p, clicked: true};
            }
            return p;
        }));
        setTries(showTries + 1);
    };


    let cellComponents = null;
    if (cells) {
        cellComponents = (
            <CellDesk
                cells={cells}
                key={cells.id}
                ring={cells.ring}
                showCell={cells.clicked}
                onCellClick={onCellClick}
            />
        )
    }

    return (
        <>
            <Header/>
            <div className="RingFind">
                <button onClick={onStartGame}>Start game</button>
                <div className={'CellDesk'}>{cellComponents}</div>
                <Tries tries={showTries}/>
                <RetryButton onRestart={onStartGame}/>
            </div>
        </>
    );
};

export default RingFind;
