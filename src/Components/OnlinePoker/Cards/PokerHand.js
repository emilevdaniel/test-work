class PokerHand {
    constructor(arr) {
        this.cards = arr;
    };

    __getOutcome() {
        let Hand = require('pokersolver').Hand;
        let cardArr = [];

        this.cards.pot.forEach((cards, index) => {
            cardArr.push(cards.card.value + cards.card.suit);
        });

        let myHand = Hand.solve(cardArr);
        return myHand.descr;
    }
}

export default PokerHand;

