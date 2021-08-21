import {useContext} from "react";
import {GameStateContext} from "../components/GameStateProvider";

export default function useLiveData() {
    const { socket } = useContext(GameStateContext)

    function sendAction(id, type, targetSpace, upgrades) {
        socket.emit('action', {actor: id, action: type, targetSpace, upgrades})
    }

    return {socket, sendAction};
}