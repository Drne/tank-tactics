import {AppBar, IconButton, Typography} from "@material-ui/core";
import GameBoard from "./GameBoard";
import {useContext, useState} from "react";
import {GameStateContext} from "./GameStateProvider";
import Countdown from "react-countdown";
import HistoryIcon from '@material-ui/icons/History';
import HistoryDrawer from "./HistoryDrawer";

export default function AppBody() {
    const {gameState} = useContext(GameStateContext);
    const [historyDrawerOpen, setHistoryDrawerOpen] = useState(false);

    function handleClick() {
        setHistoryDrawerOpen((isOpen) => !isOpen)
    }

    return (
        <>
            <AppBar position="sticky">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography style={{padding: 5}}>
                        {gameState?.player.name}
                    </Typography>
                    {gameState?.player.alive ?
                        <>
                            <Typography style={{padding: 5}}>
                                Supply: {gameState?.player.supply}
                            </Typography>
                            <Typography style={{padding: 5}}>
                                Health: {gameState?.player.health}
                            </Typography>
                        </>
                        : <Typography style={{padding: 5}}>
                            Votes: {gameState?.player.votes}
                        </Typography>}
                    {!gameState?.player.alive ?
                        <Typography style={{padding: 5}}>
                            You are dead
                        </Typography> : ''
                    }
                    <>
                        <Typography style={{padding: 5}}>
                            {gameState && gameState.history ? gameState.history[gameState.history.length - 1] : ''}
                        </Typography>
                        <IconButton size={"small"} style={{color: 'white'}} onClick={handleClick}>
                            <HistoryIcon/>
                        </IconButton>
                    </>
                    {gameState?.nextResupplyTime ?
                        <>
                            <Typography style={{padding: 5, marginLeft: 'auto'}}>
                                Resupply in:
                            </Typography>
                            <div style={{padding: 5}}>
                                <Countdown date={Date.parse(gameState?.nextResupplyTime)}/>
                            </div>
                        </>
                        : ''
                    }
                </div>
            </AppBar>
            <HistoryDrawer open={historyDrawerOpen} setOpen={setHistoryDrawerOpen}/>
            <GameBoard/>
        </>
    )
}