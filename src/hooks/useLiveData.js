import {useContext} from "react";
import {GameStateContext} from "../components/prodivers/GameStateProvider";

export default function useLiveData() {
    const { socket, setIsLoading } = useContext(GameStateContext)

    function sendAction(id, type, targetSpace, upgrades) {
        socket.emit('action', {actor: id, action: type, targetSpace, upgrades})
        setIsLoading(true);
    }

    return {socket, sendAction};
}