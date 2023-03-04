import { createSlice } from "@reduxjs/toolkit";
import {data} from "../assets/data"
const setCards = () =>{
    return  data.sort(()=> Math.random() -0.5);
};
const cardSlice = createSlice({
    name: "cards",
    initialState:{
        cards:setCards(),
        activeCards:[],
        status:"",
        beginScore: 200,
        correctMatch:40,
        wrongMatch:20,
        closedCards:24,
        openedCards:0,
        
    },
    reducers:{
      
        resetGame: (state) =>{
            state.cards=data.sort(()=> Math.random() -0.5);
            state.activeCards=[];
            state.status="";
            state.beginScore= 200;
            state.correctMatch=40;
            state.wrongMatch=20;
            state.closedCards=24;
            state.openedCards=0;
        },
        openCard: (state, action) =>{
            const findCard = state.cards.find((card) => card.id === action.payload);
            findCard.status = true;
            state.activeCards =[...state.activeCards, findCard];
            state.status = "selected";
        },
        closeCard: (state) =>{
            state.activeCards.map(
                (item) => (state.cards.find((card) => card.name === item.name).status = false))
                state.status = "";
                state.activeCards = [];
        },
        correctMatch: (state) =>{
            state.beginScore = (state.beginScore + state.correctMatch ) ;
            state.openedCards += 2;    
            state.closedCards -= 2;
            state.activeCards = [];
            state.status = "success";
            
        },
        falseMatch: (state)=>{
            state.beginScore -= state.wrongMatch
            state.activeCards = [];
            state.status = "fail";
            
        },
        setMatch: (state, action) =>{
            const card =state.cards.find((card) => card.id === action.payload);
            card.matched = true
        }
    },
})

export const {fillCards,resetGame,openCard,closeCard,correctMatch,falseMatch,setMatch} = cardSlice.actions;
export default cardSlice.reducer;