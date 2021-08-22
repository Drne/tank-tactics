import {Typography} from "@material-ui/core";
import Countdown from "react-countdown";
import {useContext, useMemo} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";

export default function Ceasefire() {
    const { gameState } = useContext(GameStateContext);
    const text = useMemo(() => {
        if (gameState.ceasefire.active) {
            return 'Ceasefire Ends In:'
        } else {
            return 'Ceasefire Starts In:'
        }
    }, [gameState])

    const nextEventTime = gameState?.ceasefire.active ? gameState.ceasefire.end : gameState.ceasefire.start;

    return (
        <>
            <Typography style={{padding: 5, marginLeft: 'auto'}}>
                {text}
            </Typography>
            <div style={{padding: 5}}>
                <Countdown date={Date.parse(nextEventTime)}/>
            </div>
        </>
    )
}