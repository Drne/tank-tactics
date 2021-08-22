import {useContext, useState} from "react";
import {GameStateContext} from "./prodivers/GameStateProvider";
import {ClickAwayListener, Fade, makeStyles, Paper, Popper, Typography} from "@material-ui/core";
import PlayerStats from "./PlayerStats";

export default function wrapWithPlayerData(position, component) {
    return (
        <PlayerData position={position}>
            {component}
        </PlayerData>
    )
}

export function PlayerData({position, children}) {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const {gameState} = useContext(GameStateContext)
    const classes = useStyles();

    const onClickAway = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open)
    };

    const [y, x] = position;

    let playerAtPosition = null;
    if (gameState?.userData.filter((playerData) => playerData.position && playerData.position === [y, x])) {
        playerAtPosition = gameState.userData.filter((playerData) => playerData.position && playerData.position[0] === y && playerData.position[1] === x)[0]
    }


    return (
        <div className={classes.container} key={`${position[1]}_${[position[0]]}`}>
            {open && <img src={"https://freepngimg.com/thumb/target/6-2-target-picture.png"} className={classes.target}
                          alt="target"/>}
            <div onClick={handleClick} className={classes.anchor}>
                {children}
            </div>
            {open && <ClickAwayListener onClickAway={onClickAway}>
                <Popper open={open} transition anchorEl={anchorEl}>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps}>
                            <Paper className={classes.paper}>
                                {playerAtPosition ?
                                    <PlayerStats name={playerAtPosition.name} health={playerAtPosition.health}
                                                 supply={playerAtPosition.supply}
                                                 votes={playerAtPosition.votesForToday}/> :
                                    <Typography> Click on a player to see their stats</Typography>}
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>}
        </div>
    )
}

const useStyles = makeStyles({
    anchor: {
        height: '100%',
        width: '100%',
    },
    container: {
        position: "relative",
        height: '100%',
        width: '100%'
    },
    target: {
        maxWidth: 50,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    paper: {
        padding: '10px',
    }
})