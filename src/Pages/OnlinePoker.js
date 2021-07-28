import React from "react";

import ScoreTable from "../Components/OnlinePoker/ScoreTable/ScoreTable";
import CardsComp from "../Components/OnlinePoker/Cards/CardsComp";
import '../Components/OnlinePoker/Cards/Cards.css'
import Header from "../Components/MainPage/Header/Header";


const OnlinePoker = () => (
    <div className="App">
        <Header/>
        <table>
            <tbody>
            <ScoreTable outCome={'Royal Flush'} firstPrize={250} secondPrize={500} thirdPrize={750}
                        fourthPrize={1000} fifthPrize={5000}/>
            <ScoreTable outCome={'Straight Flush'} firstPrize={50} secondPrize={100} thirdPrize={150}
                        fourthPrize={200} fifthPrize={250}/>
            <ScoreTable outCome={'Four of a Kind'} firstPrize={25} secondPrize={50} thirdPrize={75}
                        fourthPrize={100} fifthPrize={125}/>
            <ScoreTable outCome={'Full House'} firstPrize={9} secondPrize={18} thirdPrize={27} fourthPrize={36}
                        fifthPrize={45}/>
            <ScoreTable outCome={'Flush'} firstPrize={6} secondPrize={12} thirdPrize={18} fourthPrize={24}
                        fifthPrize={30}/>
            <ScoreTable outCome={'Straight'} firstPrize={4} secondPrize={8} thirdPrize={12} fourthPrize={16}
                        fifthPrize={20}/>
            <ScoreTable outCome={'Three of a Kind'} firstPrize={3} secondPrize={6} thirdPrize={9} fourthPrize={12}
                        fifthPrize={15}/>
            <ScoreTable outCome={'Two Pairs'} firstPrize={2} secondPrize={4} thirdPrize={6} fourthPrize={8}
                        fifthPrize={10}/>
            <ScoreTable outCome={'Jack or better'} firstPrize={1} secondPrize={2} thirdPrize={3} fourthPrize={4}
                        fifthPrize={5}/>
            </tbody>
        </table>

        <div className={'playingCards'}>

            <CardsComp/>

        </div>
    </div>
);


export default OnlinePoker;
