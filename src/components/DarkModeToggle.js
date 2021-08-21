import {makeStyles, Switch, Typography} from "@material-ui/core";
import useQuery from "../hooks/useQuery";

export default function DarkModeToggle() {

    const { params, updateParams } = useQuery();
    const classes = useStyles();

    function handleSwitch(event) {
        if (event.target.checked) {
            params.set('darkMode', "1");
            updateParams();
        } else {
            params.delete('darkMode')
            updateParams();
        }
    }

    return (
        <div className={classes.container}>
            <Typography className={classes.text}>
                Dark Mode
            </Typography>
            <Switch
                checked={params.get('darkMode')}
                onChange={handleSwitch}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                color="primary"
            />
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        margin: 10,
        display: 'inline-flex',
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        marginRight: 'auto'
    }
});