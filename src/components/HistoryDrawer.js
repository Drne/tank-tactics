import {useContext, useEffect} from "react";
import {GameStateContext} from "./GameStateProvider";
import {Drawer, makeStyles, Paper} from "@material-ui/core";

export default function HistoryDrawer({open, setOpen}) {

    const {gameState} = useContext(GameStateContext);
    const classes = useStyles();

    useEffect(() => {
        console.log(open)
    }, [open])

    return (
        <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
            <Paper className={classes.container}>
                {gameState && gameState.history.map((historyEntry) => {
                    return (
                        <Paper className={classes.paper}>
                            {historyEntry}
                        </Paper>
                    )
                }).reverse()}
            </Paper>
        </Drawer>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: 'slategray'
    },
    paper: {
        padding: 5,
        margin: 5
    }
})