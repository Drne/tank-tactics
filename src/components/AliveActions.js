import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider} from "@material-ui/core";
import {useContext, useState} from "react";
import {GameStateContext} from "./GameStateProvider";
import {useParams} from "react-router-dom";
import {LiveDataContext} from "./LiveDataProvider";

export default function AliveActions({position}) {

    const [action, setAction] = useState('move');
    const [upgrades, setUpgrades] = useState(0)

    const {gameState} = useContext(GameStateContext)
    const { id } = useParams();
    const {sendAction} = useContext(LiveDataContext)

    const onSubmit = () => {
        sendAction(id, action, position, upgrades)
    }

    const disabled = !(gameState?.player?.supply > 0);

    return (
        <>
            <FormControl component="fieldset">
                ({position[1]},{position[0]})
                <FormLabel component="legend">Actions</FormLabel>
                <RadioGroup row onChange={(event) => setAction(event.target.value)} value={action}>
                    <FormControlLabel value="move" control={<Radio/>} label="Move"
                                      disabled={disabled}/>
                    <FormControlLabel value="fireRound" control={<Radio/>} label="Fire Round"
                                      disabled={disabled}/>
                    <FormControlLabel value="fireSupply" control={<Radio/>} label="Fire Supply"
                                      disabled={disabled}/>
                </RadioGroup>
            </FormControl>
            <FormLabel component="legend">Upgrades</FormLabel>
            <Slider id="upgrades" min={0} max={Math.max(gameState?.player?.supply - 1, 0)} step={1}
                    valueLabelDisplay={'auto'} defaultValue={0} value={upgrades} disabled={disabled}
                    onChange={(_, value) => {
                        setUpgrades(value)
                    }}/>
            <Button type="submit" disabled={disabled} onClick={onSubmit}>
                Submit
            </Button>
        </>
    )
}