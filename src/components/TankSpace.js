import {Hidden, makeStyles, Typography} from "@material-ui/core";

export default function TankSpace({health, supply, name, id}) {

    const classes = useStyles();

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: 2, backgroundColor: "rgb(211,211,211,0.8)"}}
             key={id}>
            <div className={classes.topContainer}>
                <img src={"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28562/tank-1-clipart-md.png"}
                     className={classes.img} alt="Tank"/>
                <Hidden smDown>
                    <Typography className={classes.name}>
                        {name}
                    </Typography>
                </Hidden>
            </div>
            <div style={{display: 'flex', flexWrap: 'nowrap', alignSelf: 'center'}}>
                <div className={classes.statContainer}>
                    <Hidden mdDown>
                        <img src={"https://static.thenounproject.com/png/2111027-200.png"}
                             className={classes.img} alt="supply"/>
                        <Typography>
                            {supply}
                        </Typography>
                    </Hidden>
                </div>
                <div className={classes.statContainer}>
                    <Hidden mdDown>
                        <img
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"}
                            className={classes.img} alt="health"/>
                        <Typography>
                            {health}
                        </Typography>
                    </Hidden>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    statContainer: {
        display: 'flex',
        flexWrap: "wrap"
    },
    topContainer: {
        display: 'inline-flex',
        alignSelf: 'center',
        flexWrap: "wrap"
    },
    name: {
        flex: 1
    },
    img: {maxHeight: 20, maxWidth: 20, alignSelf: 'center', placeContent: 'center'}
}))