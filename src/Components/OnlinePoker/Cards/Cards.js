import React from 'react';
import './Cards.css'


const Cards = props => {

    return (
        <div className="Cards">
            <button onClick={props.newPot}>New Cards</button>
            <ul className={"playingCards"}>
                <li className={'card rank-' + props.pot[0].card.value + ' ' + props.pot[0].card.suit}>
                    <span className={'rank'}>{props.pot[0].card.value}</span>
                    <span className={'suit'}>{props.pot[0].card.marker}</span>
                </li>
                <li className={'card rank-' + props.pot[1].card.value + ' ' + props.pot[1].card.suit}>
                    <span className={'rank'}>{props.pot[1].card.value}</span>
                    <span className={'suit'}>{props.pot[1].card.marker}</span>
                </li>
                <li className={'card rank-' + props.pot[2].card.value + ' ' + props.pot[2].card.suit}>
                    <span className={'rank'}>{props.pot[2].card.value}</span>
                    <span className={'suit'}>{props.pot[2].card.marker}</span>
                </li>
                <li className={'card rank-' + props.pot[3].card.value + ' ' + props.pot[3].card.suit}>
                    <span className={'rank'}>{props.pot[3].card.value}</span>
                    <span className={'suit'}>{props.pot[3].card.marker}</span>
                </li>
                <li className={'card rank-' + props.pot[4].card.value + ' ' + props.pot[4].card.suit}>
                    <span className={'rank'}>{props.pot[4].card.value}</span>
                    <span className={'suit'}>{props.pot[4].card.marker}</span>
                </li>
            </ul>
            <button onClick={props.getOutcome}>Найти комбинацию</button>
            <div>{props.comb.comb}</div>
        </div>
    );
};


export default Cards;