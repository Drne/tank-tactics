import {AppBar, IconButton, Typography} from "@material-ui/core";
import {useContext, useState} from "react";
import {GameStateContext} from "./GameStateProvider";
import Countdown from "react-countdown";
import HistoryIcon from '@material-ui/icons/History';
import GavelIcon from '@material-ui/icons/Gavel';
import HistoryDrawer from "./HistoryDrawer";
import GameBoardV2 from "./GameboardV2";
import JuryDrawer from "./JuryDrawer";

export default function AppBody() {
    const {gameState} = useContext(GameStateContext);
    const [historyDrawerOpen, setHistoryDrawerOpen] = useState(false);
    const [juryDrawerOpen, setJuryDrawerOpen] = useState(false);

    function handleHistoryClick() {
        setHistoryDrawerOpen((isOpen) => !isOpen)
    }

    function handleJuryClick() {
        setJuryDrawerOpen((isOpen) => !isOpen)
    }

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <AppBar position="sticky" style={{flex: 0}}>
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
                        <IconButton size={"small"} style={{color: 'white'}} onClick={handleHistoryClick}>
                            <HistoryIcon/>
                        </IconButton>
                        <IconButton size={"small"} style={{color: 'white'}} onClick={handleJuryClick}>
                            <GavelIcon/>
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
            <JuryDrawer open={juryDrawerOpen} setOpen={setJuryDrawerOpen} />
            <GameBoardV2/>
        </div>
    )
}