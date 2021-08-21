import {Fade, Grid, Paper} from "@material-ui/core";
import wrapWithActionPrompt from "./ActionPrompt";
import TankSpace from "./TankSpace";
import getDistanceBetweenPositions from "../utilities/getDistanceBetweenPositions";
import {useContext, useMemo} from "react";
import {GameStateContext} from "./GameStateProvider";

export default function GameBoard() {
    const {gameState} = useContext(GameStateContext);

    const gameBoard = useMemo(() => {

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
                            boxSizing: 'border-box'
                        }}>
                            {wrapWithActionPrompt([y, x], playerAtPosition ?
                                <TankSpace health={playerAtPosition.health} supply={playerAtPosition.supply}
                                           name={playerAtPosition.name} id={`${x}${y}`}/> :
                                <div style={{minHeight: '60px', minWidth: '60px'}} id={`${x}${y}`}/>)}
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
                    internalComponents.push(itemToPush)
                }
            return internalComponents;
            }


            for (let i = -1; i < gameState.bounds[0]; i++) {
                components.push(<div>
                    {generateInternalComponents(i)}
                </div>)
            }
            return components;
        }

        return (
            <>
                {gameState && gameState.bounds && generateGridLayout()}
            </>
        )
    }, [gameState])

    return (
        <Grid container justifyContent="space-around" style={{height: 'calc(100% - 24px)'}}>
            <Fade>
                {gameBoard}
            </Fade>
        </Grid>
    )
}