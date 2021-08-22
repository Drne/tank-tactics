import {AppBar, IconButton, Typography} from "@material-ui/core";
import {useContext, useState} from "react";
import {GameStateContext} from "./prodivers/GameStateProvider";
import MenuIcon from '@material-ui/icons/Menu';
import HistoryDrawer from "./drawers/HistoryDrawer";
import GameBoard from "./gameboard/GameBoard";
import JuryDrawer from "./drawers/JuryDrawer";
import MenuDrawer from "./drawers/MenuDrawer";
import StatDrawer from "./drawers/StatDrawer";
import Ceasefire from "./timers/Ceasefire";
import Resupply from "./timers/Resupply";
import PlayerStats from "./PlayerStats";

export default function AppBody() {
    const {gameState, isLoading} = useContext(GameStateContext);
    const [historyDrawerOpen, setHistoryDrawerOpen] = useState(false);
    const [juryDrawerOpen, setJuryDrawerOpen] = useState(false);
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [statsDrawerOpen, setStatsDrawerOpen] = useState(false);

    function handleMenuClick() {
        setMenuDrawerOpen((isOpen) => !isOpen)
    }

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <AppBar position="sticky" style={{flex: 0}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <IconButton style={{color: 'white'}} size={"small"} onClick={handleMenuClick}>
                        <MenuIcon/>
                    </IconButton>
                    {(!isLoading || gameState) && (
                        <>
                            {gameState?.spectator ?
                                <>
                                    <Typography style={{padding: 5}}>
                                        Spectator
                                    </Typography>
                                </>
                                :
                                <>
                                    <Typography style={{padding: 5}}>
                                        {gameState?.player.name}
                                    </Typography>
                                    {gameState?.player.alive ?
                                        <PlayerStats health={gameState?.player.health}
                                                     supply={gameState?.player.supply}
                                                     votes={gameState?.player.votesForToday}/>
                                        : <Typography style={{padding: 5}}>
                                            Votes: {gameState?.player.votes}
                                        </Typography>}
                                    {!gameState?.player.alive ?
                                        <Typography style={{padding: 5}}>
                                            You are dead
                                        </Typography> : ''
                                    }
                                </>
                            }
                        </>
                    )}
                    {gameState?.nextResupplyTime && <Resupply/>
                    }
                    {
                        gameState?.ceasefire && <Ceasefire/>
                    }
                </div>
            </AppBar>
            <StatDrawer isOpen={statsDrawerOpen} setIsOpen={setStatsDrawerOpen}/>
            <MenuDrawer open={menuDrawerOpen} setIsOpen={setMenuDrawerOpen} setIsHistoryOpen={setHistoryDrawerOpen}
                        setIsJuryOpen={setJuryDrawerOpen} setIsStatsOpen={setStatsDrawerOpen}/>
            <HistoryDrawer open={historyDrawerOpen} setOpen={setHistoryDrawerOpen}/>
            <JuryDrawer open={juryDrawerOpen} setOpen={setJuryDrawerOpen}/>
            <GameBoard/>
        </div>
    )
}