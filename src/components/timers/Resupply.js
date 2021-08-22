import {Typography} from "@material-ui/core";
import Countdown from "react-countdown";
import {useContext} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";

export default function Resupply() {
    const { gameState } = useContext(GameStateContext);

    return (
        <>
            <Typography style={{padding: 5, marginLeft: 'auto'}}>
                Resupply In:
            </Typography>
            <div style={{padding: 5}}>
                <Countdown date={Date.parse(gameState.nextResupplyTime)}/>
            </div>
        </>
    )
}