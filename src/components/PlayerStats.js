import {makeStyles, Typography} from "@material-ui/core";
import HowToVoteIcon from '@material-ui/icons/HowToVote';

export default function PlayerStats({name, health, supply, votes, vertical = false}) {

    const classes = useStyles({ vertical });

    return (
        <div className={classes.playerInfo}>
            <Typography align={'center'}>
                {name}
            </Typography>
            <div className={classes.statContainer}>
                <div className={classes.stat}>
                    <img src={"https://static.thenounproject.com/png/2111027-200.png"}
                         className={classes.img} alt="supply"/>
                    <Typography>
                        {supply}
                    </Typography>
                </div>
                <div className={classes.stat}>
                    {health !== 0 ?
                        <img
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"}
                            className={classes.img} alt="health"/>
                        :
                        <img
                            src={"https://www.freeiconspng.com/uploads/healthcare-skull-icon-5.png"}
                            className={classes.img} alt="death"/>
                    }
                    <Typography>
                        {health}
                    </Typography>
                </div>
                {votes !== undefined && (<div className={classes.stat}>
                    <HowToVoteIcon />
                    <Typography>
                        {votes} / 3
                    </Typography>
                </div>)
                }
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    playerInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    statContainer: {
        display: 'flex',
        flexDirection: ({ vertical }) => vertical ? 'column' : 'row',
        placeContent: 'space-around'
    },
    stat: {
        display: 'flex',
        flexDirection: 'row',
        placeContent: 'space-between'
    },
    img: {maxHeight: 20, maxWidth: 20, alignSelf: 'center', placeContent: 'center'},
}))