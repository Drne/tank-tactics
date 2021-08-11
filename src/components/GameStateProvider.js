import {createContext, useEffect, useState} from "react";
import {getGameState} from "../utilities/fetchGameData";
import {useParams} from "react-router-dom";

export const GameStateContext = createContext({player: {name: 'loading', supply: 0, health: 0}});

export default function GameStateProvider({ children }) {
    const { id } = useParams();
    const [gameState, setGameState] = useState();
    
    useEffect(() => {
        getGameState(id).then((gameState) => setGameState(gameState));
    }, [id]);

    return (
        <GameStateContext.Provider value={{gameState, setGameState}}>
            {children}
        </GameStateContext.Provider>
    )
}