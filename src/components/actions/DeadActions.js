import {Button, Typography} from "@material-ui/core";
import {useContext} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";
import {LiveDataContext} from "../prodivers/LiveDataProvider";
import {useParams} from "react-router-dom";

export default function DeadActions({position}) {

    const {gameState} = useContext(GameStateContext)
    const {sendAction} = useContext(LiveDataContext)
    const {id} = useParams();
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
                        <Typography>
                            You have {playerAtPosition.votes} votes
                        </Typography>
                        <Typography>
                            {playerAtPosition.name} currently has {playerAtPosition.votesForToday}/3 votes
                        </Typography>
                        <Button onClick={handleSubmit} variant="contained">
                            Vote For {playerAtPosition.name}
                        </Button>
                    </div> : `Select a Players Position to Vote for Them`
            }
        </>
    )
}