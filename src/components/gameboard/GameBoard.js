import {makeStyles, Paper} from "@material-ui/core";
import {useContext, useMemo} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";
import getDistanceBetweenPositions from "../../utilities/getDistanceBetweenPositions";
import wrapWithActionPrompt from "../actions/ActionPrompt";
import TankSpace from "../TankSpace";
import useQuery from "../../hooks/useQuery";
import wrapWithPlayerData from "../PlayerData";

export default function GameBoard() {

    const {gameState} = useContext(GameStateContext);
    const {params} = useQuery();

    const classes = useStyles({gameState});

    const gridLayout = useMemo(() => {
            const isDarkMode = params.has('darkMode');
            const gridColor = isDarkMode ? '#000000' : "#D3D3D3"
            const stripeFactory = (stripeColor) => `repeating-linear-gradient(-45deg,  ${stripeColor},  ${stripeColor} 10px,  ${gridColor} 10px, ${gridColor} 20px)`
            const backgroundColors = [stripeFactory("#5C8248FF"), stripeFactory("#FFB862"), stripeFactory("#FF6262")]
            const components = []

            const generateInternalComponents = (y) => {
                const internalComponents = []
                for (let x = -1; x < gameState.bounds[1]; x++) {
                    let playerAtPosition = null;
                    if (gameState?.userData.filter((playerData) => playerData.position && playerData.position === [y, x])) {
                        playerAtPosition = gameState.userData.filter((playerData) => playerData.position && playerData.position[0] === y && playerData.position[1] === x)[0]
                    }

                    let background = gridColor;
                    let border = ''
                    if (!gameState?.spectator) {
                        // Range indicator and player border
                        const distanceFromPlayer = getDistanceBetweenPositions(gameState?.player.position, [y, x])
                        if (params.has('rangeIndicator') && distanceFromPlayer < 3) {
                            background = backgroundColors[distanceFromPlayer]
                        } else if (distanceFromPlayer === 0) {
                            if (isDarkMode) {
                                border = 'thick solid blue'
                            } else {
                                border = "thin solid blue"
                            }
                        } else if (isDarkMode) {
                            border = "thin dotted lightgray"
                        }
                    }

                    const wrapper = gameState?.spectator ? wrapWithPlayerData : wrapWithActionPrompt
                    let itemToPush = (
                        <Paper style={{
                            textAlign: 'center',
                            flex: 1,
                            background: background,
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            height: '100%',
                            width: '100%',
                            border: border
                        }} key={`${x}_${y}`}>
                            {wrapper([y, x], playerAtPosition ?
                                <TankSpace health={playerAtPosition.health} supply={playerAtPosition.supply}
                                           name={playerAtPosition.name} id={`${x}${y}`}/> :
                                <div className={classes.blankSpace} id={`${x}${y}`} key={`${x}${y}`}/>)}
                        </Paper>)
                    if (x === -1 || y === -1) {
                        if (x === -1 && y === -1) {
                            itemToPush = (<div style={{width: '20px'}} key={`${x} ${y}`}/>)
                        } else {
                            const indexNum = x === -1 ? y : x;
                            const maxWidth = y === -1 ? '100%' : '20px'
                            itemToPush = (
                                <div style={{
                                    flex: 1,
                                    alignSelf: 'center',
                                    maxWidth: maxWidth,
                                    color: 'white'
                                }} id={`${x}${y}`} key={`${x} ${y}`}> {indexNum} </div>)
                        }
                    }
                    components.push(itemToPush)
                }
                return internalComponents;
            }

            if (gameState) {
                for (let i = -1; i < gameState.bounds[0]; i++) {
                    generateInternalComponents(i)
                }
            }
            return components;
        },
        [classes.blankSpace, gameState, params]
    );

    return (
        <div className={classes.containerGrid}>
            {gridLayout}
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