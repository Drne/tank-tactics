import {useContext, useMemo} from "react";
import {GameStateContext} from "./GameStateProvider";
import {Chip, Divider, Drawer, makeStyles, Paper, Typography} from "@material-ui/core";
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import TaskIcon from '@material-ui/icons/Note';

export default function JuryDrawer({open, setOpen}) {

    const {gameState} = useContext(GameStateContext);
    const classes = useStyles();

    const deadPlayers = useMemo(() => {
        if (gameState) {
            return gameState.userData.filter((user) => !user.alive)
        }
        return [];
    }, [gameState]);

    const alivePlayers = useMemo(() => {
        if (gameState) {
            return gameState.userData.filter((user) => user.alive)
        }
        return [];
    }, [gameState]);

    return (
        <Drawer open={open} anchor="right" onClose={() => setOpen(false)}  classes={{paper: classes.drawer}}>
            <Paper className={classes.container}>
                <div>
                    <Typography className={classes.type}>
                        The Esteemed Jury
                    </Typography>
                    <Divider/>
                    {deadPlayers.map((player) => (
                        <Paper className={classes.paper}>
                            <Typography className={classes.playerName}>
                                {player.name}
                            </Typography>
                            <Chip
                                icon={<TaskIcon/>}
                                variant="outlined"
                                label={player.votes}
                            />
                        </Paper>
                    ))}
                </div>
                <div>
                    <Typography className={classes.type}>
                        Votes For the Living
                    </Typography>
                    <Divider/>
                    {alivePlayers.map((player) => (
                        <Paper className={classes.paper}>
                            <Typography className={classes.playerName}>
                                {player.name}
                            </Typography>
                            <Chip
                                icon={<HowToVoteIcon/>}
                                variant="outlined"
                                label={`${player.votesForToday} / 3 `}
                            />
                        </Paper>
                    ))}
                </div>
            </Paper>
        </Drawer>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: 'transparent',
        padding: '10px',
        height: '100%'
    },
    drawer: {
        backgroundColor: 'slategray'
    },
    paper: {
        padding: 5,
        margin: 5,
        display: 'flex',
        placeContent: 'space-evenly'
    },
    type: {
        color: 'white',
        placeContent: 'center',
    },
    chip: {
        justifyContent: 'center'
    },
    playerName: {
        alignSelf: 'center',
        marginRight: '10px'
    }
});