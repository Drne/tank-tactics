import {useContext} from "react";
import {GameStateContext} from "../GameStateProvider";
import {Drawer, makeStyles, Paper, Typography} from "@material-ui/core";

export default function StatDrawer({isOpen, setIsOpen}) {

    const {gameState} = useContext(GameStateContext);
    const classes = useStyles();

    return (
        <Drawer open={isOpen} anchor="left" onClose={() => setIsOpen(false)} classes={{paper: classes.drawer}}>
            <Paper className={classes.container}>
                <div className={classes.gridContainer}>
                    {gameState && gameState.userData.map(userData => (
                        <Paper className={classes.paper} key={userData.name}>
                            <div>
                                <Typography align={"center"}>
                                    {userData.name}
                                </Typography>
                                <div className={classes.statContainer}>
                                    <div className={classes.statContainer}>
                                        <img src={"https://static.thenounproject.com/png/2111027-200.png"}
                                             className={classes.img} alt="supply"/>
                                        <Typography>
                                            {userData.supply}
                                        </Typography>
                                    </div>
                                    <div className={classes.statContainer}>
                                        <img
                                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"}
                                            className={classes.img} alt="health"/>
                                        <Typography>
                                            {userData.health}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    ))}
                </div>
            </Paper>
        </Drawer>
    )
}

const useStyles = makeStyles({
    text: {
      color: 'white'
    },
    container: {
        backgroundColor: 'transparent',
        height: '100%'
    },
    paper: {
        padding: 5,
        margin: 5
    },
    drawer: {
        backgroundColor: 'slategray',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    statContainer: {
        display: 'flex',
        flexDirection: 'row',
        placeContent: 'space-around'
    },
    img: {maxHeight: 20, maxWidth: 20, alignSelf: 'center', placeContent: 'center'}
});