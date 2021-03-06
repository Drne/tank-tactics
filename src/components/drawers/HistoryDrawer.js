import {useContext} from "react";
import {GameStateContext} from "../prodivers/GameStateProvider";
import {Drawer, makeStyles, Paper} from "@material-ui/core";
import ReactTimeAgo from "react-time-ago";

export default function HistoryDrawer({open, setOpen}) {

    const {gameState} = useContext(GameStateContext);
    const classes = useStyles();

    return (
        <Drawer open={open} anchor="left" onClose={() => setOpen(false)} classes={{paper: classes.drawer}}>
            <Paper className={classes.container}>
                {gameState && gameState.history.map((historyEntry) => {
                    return (
                        <Paper className={classes.paper} key={historyEntry.time}>
                            <ReactTimeAgo tooltip date={new Date(historyEntry.time)} locale="en-US"/>
                            {` | ${historyEntry.message}`}
                        </Paper>
                    )
                }).reverse()}
            </Paper>
        </Drawer>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: 'transparent',
        height: '100%'
    },
    paper: {
        padding: 5,
        margin: 5
    },
    drawer: {
        backgroundColor: 'slategray'
    }
});