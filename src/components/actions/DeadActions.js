import {Button, CircularProgress, makeStyles, Typography} from "@material-ui/core";
import {useContext} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";
import {LiveDataContext} from "../prodivers/LiveDataProvider";
import {useParams} from "react-router-dom";
import {green} from "@material-ui/core/colors";
import PlayerStats from "../PlayerStats";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function DeadActions({position}) {

    const {gameState, isLoading} = useContext(GameStateContext)
    const {sendAction} = useContext(LiveDataContext)
    const {id} = useParams();
    const classes = useStyles();
    const [y, x] = position;

    let playerAtPosition = null;
    if (gameState?.userData.filter((playerData) => playerData.position && playerData.position === [y, x])) {
        playerAtPosition = gameState.userData.filter((playerData) => playerData.position && playerData.position[0] === y && playerData.position[1] === x)[0]
    }

    function handleSubmit() {
        sendAction(id, 'vote', position, 0)
    }

    return (
        <>
            {
                playerAtPosition ?
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography align={"center"}>
                            {`You have ${gameState.player.votes} vote${gameState.player.votes === 1 ? '' : 's'}`}
                        </Typography>
                        <div className={classes.comparisonContainer}>
                            <PlayerStats name={playerAtPosition.name} health={playerAtPosition.health}
                                         supply={playerAtPosition.supply} votes={playerAtPosition.votesForToday}
                                         vertical/>
                            <ArrowForwardIcon className={classes.icon}/>
                            <PlayerStats name={playerAtPosition.name} vertical
                                         health={playerAtPosition.health}
                                         votes={playerAtPosition.votesForToday === 2 ? 0 : playerAtPosition.votesForToday + 1}
                                         supply={playerAtPosition.votesForToday === 2 ? playerAtPosition.supply + 1 : playerAtPosition.supply}/>
                        </div>
                        <div className={classes.loadingButtonContainer}>
                            <Button onClick={handleSubmit} color="primary" variant="contained" disabled={gameState.player.votes < 1 || isLoading}>
                                Vote For {playerAtPosition.name}
                            </Button>
                            {isLoading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                        </div>
                    </div>
                    : `Select a Player's Position to Vote for Them`
            }
        </>
    )
}

const useStyles = makeStyles({
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    loadingButtonContainer: {
        position: 'relative',
        alignSelf: 'center'
    },
    comparisonContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        margin: "auto"
    },
})