import {useContext, useEffect, useState} from "react";
import socketClient from "socket.io-client";
import {GameStateContext} from "../components/GameStateProvider";
import {useParams, useHistory} from "react-router-dom";

const wsURL = "https://TankTacticsService.drewcolgin.repl.co";

export default function useLiveData() {
    const [socket, setSocket] = useState();
    const { setGameState } = useContext(GameStateContext)
    const {id} = useParams();
    let history = useHistory();

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
        })

        sock.on('unlog', () => {
            history.push('/')
        })

        sock.send('hello!')
    }, [id, setGameState])

    function sendAction(id, type, targetSpace, upgrades) {
        socket.emit('action', {actor: id, action: type, targetSpace, upgrades})
    }

    return {socket, sendAction};
}