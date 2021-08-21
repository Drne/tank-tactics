import {createContext, useEffect, useState} from "react";
import {getGameState} from "../../utilities/fetchGameData";
import {useHistory, useParams} from "react-router-dom";
import {useSnackbar} from "notistack";
import socketClient from "socket.io-client";

export const GameStateContext = createContext({player: {name: 'loading', supply: 0, health: 0}});

const wsURL = "https://TankTacticsService.drewcolgin.repl.co";

export default function GameStateProvider({ children }) {
    const { id } = useParams();
    const [gameState, setGameState] = useState();
    const [socket, setSocket] = useState();
    let history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    
    useEffect(() => {
        getGameState(id).then((gameState) => setGameState(gameState));
    }, [id]);

    useEffect(() => {
        const sock = socketClient(wsURL)


        sock.on('connect', async () => {
            setSocket(sock);
            sock.emit('register', id)
        });

        sock.on('message', (message) => {
            sock.send(message)
        })

        sock.on('gameStateUpdate', (message) => {
            setGameState(message);

            if (message && message.history) {
                const lastMessage = message.history[message.history.length - 1]
                enqueueSnackbar(lastMessage.message, {variant: 'info'})
            }
        })

        sock.on('invalid', (message) => {
            enqueueSnackbar(`Invalid ${message.action} Action`, {variant: 'error', autoHideDuration: 1000})
        })

        sock.on('unlog', () => {
            history.push('/')
        })

    }, [enqueueSnackbar, history, id, setGameState])

    return (
        <GameStateContext.Provider value={{gameState, setGameState, socket}}>
            {children}
        </GameStateContext.Provider>
    )
}