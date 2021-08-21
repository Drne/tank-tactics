import {makeStyles, Paper} from "@material-ui/core";
import {useContext} from "react";
import {GameStateContext} from "./GameStateProvider";
import getDistanceBetweenPositions from "../utilities/getDistanceBetweenPositions";
import wrapWithActionPrompt from "./ActionPrompt";
import TankSpace from "./TankSpace";

export default function GameBoardV2() {

    const {gameState} = useContext(GameStateContext);

    const classes = useStyles({gameState});
    const backgroundColors = ['lightGreen', 'orange', 'red']

    function generateGridLayout() {
        const components = []

        const generateInternalComponents = (y) => {
            const internalComponents = []
            for (let x = -1; x < gameState.bounds[1]; x++) {
                let playerAtPosition = null;
                if (gameState?.userData.filter((playerData) => playerData.position && playerData.position === [y, x])) {
                    playerAtPosition = gameState.userData.filter((playerData) => playerData.position && playerData.position[0] === y && playerData.position[1] === x)[0]
                }
                const distanceFromPlayer = getDistanceBetweenPositions(gameState?.player.position, [y, x])
                const borderColor = distanceFromPlayer < 3 ? backgroundColors[distanceFromPlayer] : 'lightGray'
                const space = (
                    <Paper style={{
                        textAlign: 'center',
                        flex: 1,
                        backgroundColor: borderColor,
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        height: '100%',
                        width: '100%',
                    }}>
                        {wrapWithActionPrompt([y, x], playerAtPosition ?
                            <TankSpace health={playerAtPosition.health} supply={playerAtPosition.supply}
                                       name={playerAtPosition.name} id={`${x}${y}`}/> :
                            <div className={classes.blankSpace} id={`${x}${y}`}/>)}
                    </Paper>)
                let itemToPush = (<div>
                    {space}
                </div>)
                if (x === -1 || y === -1) {
                    if (x === -1 && y === -1) {
                        itemToPush = (<div style={{width: '20px'}}/>)
                    } else {
                        const indexNum = x === -1 ? y : x;
                        const maxWidth = y === -1 ? '100%' : '20px'
                        itemToPush = (
                            <div style={{
                                flex: 1,
                                alignSelf: 'center',
                                maxWidth: maxWidth,
                                color: 'white'
                            }} id={`${x}${y}`}> {indexNum} </div>)
                    }
                }
                components.push(itemToPush)
            }
            return internalComponents;
        }


        for (let i = -1; i < gameState.bounds[0]; i++) {
            generateInternalComponents(i)
        }
        return components;
    }

    return (
        <div className={classes.containerGrid}>
            {gameState && gameState.bounds && generateGridLayout()}
        </div>
    )
}

const useStyles = makeStyles({
    containerGrid: {
        backgroundColor: 'slategray',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: ({gameState}) => `20px repeat(${gameState ? gameState.bounds[1] : 'auto-fill'}, 1fr)`,
        gridTemplateRows: ({gameState}) => `20px repeat(${gameState ? gameState.bounds[0] : 'auto-fill'}, 1fr)`
    },
    paper: {
        height: '100%',
        width: '100%',
    },
    blankSpace: {
        height: '100%',
        width: '100%',
        minWidth: '30px'
    }
})