import {makeStyles, Switch, Typography} from "@material-ui/core";
import useQuery from "../hooks/useQuery";

export default function RangeToggle() {

    const { params, updateParams } = useQuery();
    const classes = useStyles();

    function handleSwitch(event) {
        if (event.target.checked) {
            params.set('rangeIndicator', "1");
            updateParams();
        } else {
            params.delete('rangeIndicator')
            updateParams();
        }
    }

    return (
        <div className={classes.container}>
            <Typography className={classes.text}>
                Range Indicator
            </Typography>
            <Switch
                checked={params.get('rangeIndicator')}
                onChange={handleSwitch}
                name="checkedA"
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
        marginTop: 'auto',
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        marginRight: 'auto'
    }
});