import {
    Button, CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel, makeStyles,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import {useContext, useEffect, useMemo, useState} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";
import {useParams} from "react-router-dom";
import {LiveDataContext} from "../prodivers/LiveDataProvider";
import {green} from "@material-ui/core/colors";
import PlayerStats from "../PlayerStats";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function AliveActions({position}) {

    const [action, setAction] = useState('move');

    const classes = useStyles();

    const {gameState, isLoading} = useContext(GameStateContext)
    const {id} = useParams();
    const {sendAction} = useContext(LiveDataContext)

    const [y, x] = position;

    let playerAtPosition = null;
    if (gameState?.userData.filter((playerData) => playerData.position && playerData.position === [y, x])) {
        playerAtPosition = gameState.userData.filter((playerData) => playerData.position && playerData.position[0] === y && playerData.position[1] === x)[0]
    }

    useEffect(() => {
        if (action === 'move' && playerAtPosition) {
            setAction('fireRound')
        } else if (action !== 'move' && !playerAtPosition) {
            setAction('move');
        }
    }, [action, gameState, playerAtPosition])

    const actionCost = useMemo(() => {
        if (gameState) {
            const shotDistanceX = Math.abs(gameState.player.position[1] - position[1])
            const shotDistanceY = Math.abs(gameState.player.position[0] - position[0])
            return Math.max(Math.max(shotDistanceY, shotDistanceX) - 2, 0);
        } else {
            return 0;
        }
    }, [gameState, position])

    const onSubmit = () => {
        sendAction(id, action, position, actionCost)
    }

    const disabled = !(gameState?.player?.supply > 0);

    const submitDisabled = actionCost > gameState?.player.supply - 1 || disabled

    const targetingSelf = gameState.player.position[0] === y && gameState.player.position[1] === x;

    const availableUpgrades = gameState ? Math.max(gameState.player.supply - 1, 0) : 0
    return (
        <div>
            <Typography>
                ({position[1]},{position[0]})
            </Typography>
            <FormControl component="fieldset">
                <FormLabel component="legend">Actions (base cost 1)</FormLabel>
                <RadioGroup row onChange={(event) => setAction(event.target.value)} value={action}>
                    <FormControlLabel value="move" control={<Radio color={"primary"}/>} label="Move"
                                      disabled={disabled || playerAtPosition} labelPlacement="top"/>
                    <FormControlLabel value="fireRound" control={<Radio color={"primary"}/>} label="Fire Round"
                                      disabled={disabled || !playerAtPosition} labelPlacement="top"/>
                    <FormControlLabel value="fireSupply" control={<Radio color={"primary"}/>} label="Fire Supply"
                                      disabled={disabled || !playerAtPosition} labelPlacement="top"/>
                </RadioGroup>
            </FormControl>
            <div className={classes.bottomContainer}>
                <div>
                    <FormLabel component="legend">Upgrades</FormLabel>
                    <Typography>
                        Required: {actionCost}
                    </Typography>
                    <Typography>
                        Available: {availableUpgrades}
                    </Typography>
                    <div className={classes.submitContainer}>
                        <div className={classes.loadingButtonContainer}>
                            <Button type="submit" variant="contained" color="primary"
                                    disabled={submitDisabled || isLoading || targetingSelf}
                                    onClick={onSubmit}>
                                Submit
                            </Button>
                            {isLoading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                        </div>
                        {submitDisabled && !targetingSelf && <Typography className={classes.submitErrorMessage}>
                            Insufficient Supply!
                        </Typography>}
                        {targetingSelf && <Typography className={classes.submitErrorMessage}>
                            Can't target Self!
                        </Typography>}
                    </div>
                </div>
                {playerAtPosition &&
                <div className={classes.comparisonContainer}>
                    <PlayerStats name={playerAtPosition.name} health={playerAtPosition.health}
                                 supply={playerAtPosition.supply}/>
                    <ArrowForwardIcon className={classes.icon}/>
                    <PlayerStats name={playerAtPosition.name}
                                 health={action === 'fireRound' ? playerAtPosition.health - 1 : playerAtPosition.health}
                                 supply={action === 'fireSupply' ? playerAtPosition.supply + 1 : playerAtPosition.supply}/>
                </div>
                }
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    submitContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    submitErrorMessage: {
        alignSelf: 'center',
        color: 'red',
        margin: '2px'
    },
    loadingButtonContainer: {
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    bottomContainer: {
        display: 'flex',
        placeContent: 'space-between'
    },
    img: {
        maxHeight: 20,
        maxWidth: 20,
        alignSelf: 'center',
        placeContent: 'center'
    },
    comparisonContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        margin: "auto"
    }
}))