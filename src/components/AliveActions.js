import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel, makeStyles,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import {useContext, useMemo, useState} from "react";
import {GameStateContext} from "./GameStateProvider";
import {useParams} from "react-router-dom";
import {LiveDataContext} from "./LiveDataProvider";

export default function AliveActions({position}) {

    const [action, setAction] = useState('move');

    const classes = useStyles();

    const {gameState} = useContext(GameStateContext)
    const {id} = useParams();
    const {sendAction} = useContext(LiveDataContext)

    const [y, x] = position;

    let playerAtPosition = null;
    if (gameState?.userData.filter((playerData) => playerData.position && playerData.position === [y, x])) {
        playerAtPosition = gameState.userData.filter((playerData) => playerData.position && playerData.position[0] === y && playerData.position[1] === x)[0]
    }

    const actionCost = useMemo(() => {
        if (gameState) {
            const shotDistanceX = Math.abs(gameState.player.position[1] - position[1])
            const shotDistanceY = Math.abs(gameState.player.position[0] - position[0])
            console.log(Math.max(shotDistanceY, shotDistanceX))
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

    const availableUpgrades = gameState ? Math.max(gameState.player.supply - 1, 0) : 0
    return (
        <>
            <Typography>
                ({position[1]},{position[0]})
            </Typography>
            <FormControl component="fieldset">
                <FormLabel component="legend">Actions (base cost 1)</FormLabel>
                <RadioGroup row onChange={(event) => setAction(event.target.value)} value={action}>
                    <FormControlLabel value="move" control={<Radio/>} label="Move"
                                      disabled={disabled}/>
                    <FormControlLabel value="fireRound" control={<Radio/>} label="Fire Round"
                                      disabled={disabled || !playerAtPosition}/>
                    <FormControlLabel value="fireSupply" control={<Radio/>} label="Fire Supply"
                                      disabled={disabled || !playerAtPosition}/>
                </RadioGroup>
            </FormControl>
            <FormLabel component="legend">Upgrades</FormLabel>
            <Typography>
                Required: {actionCost}
            </Typography>
            <Typography>
                Available: {availableUpgrades}
            </Typography>
            <div className={classes.submitContainer}>
                <Button type="submit" variant="contained" disabled={submitDisabled} onClick={onSubmit} error>
                    Submit
                </Button>
                {submitDisabled ? <Typography className={classes.submitErrorMessage}>
                    Insufficient Supply!
                </Typography> : ''}
            </div>
        </>
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
    }
}))