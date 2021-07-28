class CardDeck {
    constructor() {
        this.deck = [];
        this.suits = ["d", "s", "h", "c"];
        this.valueOfCard = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.valueOfCard.length; j++) {
                let card = {value: this.valueOfCard[j], suit: this.suits[i]};
                this.deck.push(card);
            }
        }
    };

    __getCard() {
        let randomNumber = Math.floor(Math.random() * (this.deck.length - 1));
        let deck = this.deck.splice(randomNumber, 1);
        return deck[0];
    }

    __getCards(howMany) {
        let pot = [];
        for (let i = 0; i < howMany; i++) {
            pot.push(this.__getCard());
        }
        return pot;
    }

}

export default CardDeck;