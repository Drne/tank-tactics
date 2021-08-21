import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import GavelIcon from "@material-ui/icons/Gavel";
import FavoriteIcon from "@material-ui/icons/Favorite"
import RangeToggle from "../RangeToggle";
import DarkModeToggle from "../DarkModeToggle";

export default function MenuDrawer({open, setIsOpen, setIsJuryOpen, setIsStatsOpen, setIsHistoryOpen}) {

    const classes = useStyles();

    return (
        <Drawer open={open} anchor="left" onClose={() => setIsOpen(false)} classes={{paper: classes.drawer}}>
            <Paper className={classes.container}>
                <List>
                    <ListItem button key={'history'} className={classes.icon} onClick={() => {
                        setIsHistoryOpen(true);
                        setIsOpen(false);
                    }}>
                        <ListItemIcon className={classes.icon}>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"History"} />
                    </ListItem>
                    <ListItem button key={'jury'} className={classes.icon} onClick={() => {
                        setIsOpen(false);
                        setIsJuryOpen(true);
                    }}>
                        <ListItemIcon className={classes.icon}>
                            <GavelIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Jury"}/>
                    </ListItem>
                    <ListItem button key={'stats'} className={classes.icon} onClick={() => {
                        setIsOpen(false);
                        setIsStatsOpen(true);
                    }}>
                        <ListItemIcon className={classes.icon}>
                            <FavoriteIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Stats"}/>
                    </ListItem>
                </List>
                <RangeToggle />
                <DarkModeToggle />
            </Paper>
        </Drawer>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: 'transparent',
        height: '100%',
        display: 'contents'
    },
    paper: {
        padding: 5,
        margin: 5
    },
    drawer: {
        backgroundColor: 'slategray',
        width: '200px'
    },
    icon: {
        color: 'white'
    }
});