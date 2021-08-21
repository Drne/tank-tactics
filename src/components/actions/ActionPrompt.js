import {useContext, useState} from "react";
import {
    ClickAwayListener,
    Fade, makeStyles,
    Paper,
    Popper,
} from "@material-ui/core";
import {GameStateContext} from "../prodivers/GameStateProvider";
import AliveActions from "./AliveActions";
import DeadActions from "../DeadActions";

export default function wrapWithActionPrompt(position, component) {
    return (
        <ActionPrompt position={position}>
            {component}
        </ActionPrompt>
    )
}

export function ActionPrompt({position, children}) {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const {gameState} = useContext(GameStateContext)
    const classes = useStyles();

    const onClickAway = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open)
    };


    return (
        <div className={classes.container} key={`${position[1]}_${[position[0]]}`}>
            {open && <img src={"https://freepngimg.com/thumb/target/6-2-target-picture.png"} className={classes.target} alt="target"/>}
            <div onClick={handleClick} className={classes.anchor}>
                {children}
            </div>
            {open && <ClickAwayListener onClickAway={onClickAway}>
                <Popper open={open} transition anchorEl={anchorEl}>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps}>
                            <Paper className={classes.paper}>
                                {gameState?.player.alive ?
                                    <AliveActions position={position}/> :
                                    <DeadActions position={position}/>
                                }
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>}
        </div>
    )
}

const useStyles = makeStyles({
    anchor: {
        height: '100%',
        width: '100%',
    },
    container: {
        position: "relative",
        height: '100%',
        width: '100%'
    },
    target: {
        maxWidth: 50,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    paper: {
        padding: '10px',
    }
})