import React, {Component} from 'react';
import CardDeck from "./CardDeck";
import Cards from "./Cards";
import PokerHand from "./PokerHand";

class CardsComp extends Component {
    state = {
        pot: [
            {card: {value: '', suit: '', marker: ''}},
            {card: {value: '', suit: '', marker: ''}},
            {card: {value: '', suit: '', marker: ''}},
            {card: {value: '', suit: '', marker: ''}},
            {card: {value: '', suit: '', marker: ''}},
        ],
        combination: {comb: 'no comb'},
    };

    newPot = () => {
        const myDeck = new CardDeck();

        const pot = myDeck.__getCards(5);
        pot.forEach(function (card) {
            if (card.suit === "s") {
                card['marker'] = '♠';
            } else if (card.suit === "c") {
                card['marker'] = '♣';
            } else if (card.suit === "h") {
                card['marker'] = '♥';
            } else if (card.suit === "d") {
                card['marker'] = '♦';
            }
        });
        const newPot = this.state.pot.map((p, i) => {
            p = {card: pot[i]};
            return {
                ...p,
            }
        });

        this.setState({...this.state, pot: newPot,});


    };

    getOutcome = () => {
        let thisPokerHand = new PokerHand(this.state);
        let comb = thisPokerHand.__getOutcome();

        this.setState({
            ...this.state,
            combination: {comb},
        });
    };

    render() {
        return (
            <Cards pot={this.state.pot} comb={this.state.combination} newPot={this.newPot}
                   getOutcome={this.getOutcome}/>
        );
    }
}


export default CardsComp;