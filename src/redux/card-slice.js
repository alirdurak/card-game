import { createSlice } from "@reduxjs/toolkit";
import {data} from "../assets/data";
const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
const cardSlice = createSlice({
    name: "cards",
    initialState:{
        cards:shuffle(data),
        matchedCards:[],
        selectedCards:[],
        score:""
        
    },
    reducers:{
        resetGame : (state) => {
            const newArray = shuffle(data)
            state.cards = newArray
        },
        selectCard : (state, action) => {
            if(state.selectedCards.length<2){
                const selectedCard =  state.cards.find(card => card.id === action.payload)
                selectedCard.status = "selected"
                state.selectedCards = [...state.selectedCards,selectedCard]
            }else if(state.selectedCards[0].name === state.selectedCards[1].name ) {
               state.cards.forEach(card => { if(card.name === state.selectedCards[0].name){
                card.status = "matched"
               }

               })
                state.selectedCards.forEach(card => card.status = "matched")
                state.matchedCards = [...state.matchedCards, state.selectedCards]
                state.selectedCards = []
            }else{
                state.cards.forEach(card => {
                    if(card.status !== "matched"){
                        card.status = "hidden"
                    }
                })
                state.selectedCards.forEach(card => card.status = "hidden")
                state.selectedCards = []
            }
            
        }
      
       
    },
})

export const {resetGame,selectCard} = cardSlice.actions;
export default cardSlice.reducer;