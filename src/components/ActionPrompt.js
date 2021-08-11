import {useContext, useState} from "react";
import {
    ClickAwayListener,
    Fade,
    Paper,
    Popper,
} from "@material-ui/core";
import {GameStateContext} from "./GameStateProvider";
import AliveActions from "./AliveActions";
import DeadActions from "./DeadActions";

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

    const onClickAway = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open)
    };


    return (
        <div style={{position: 'relative'}}>
            {open && <img src={"https://freepngimg.com/thumb/target/6-2-target-picture.png"} style={{
                maxWidth: 50,
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}/>}
            <div onClick={handleClick}>
                {children}
            </div>
            {open && <ClickAwayListener onClickAway={onClickAway}>
                <Popper open={open} transition anchorEl={anchorEl}>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps}>
                            <Paper style={{padding: 10}}>
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