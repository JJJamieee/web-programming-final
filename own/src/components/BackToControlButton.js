import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        float: "right",
    }
}));

function BackToControlButton(props) {
    const classes = useStyles();

    return (
        <Button
            color="inherit"
            className={classes.button}
            component={NavLink} to={"/authed/basketball/cupControl/" + props.cupID}
        >
            Back to Control Page
        </Button>
    )
}

export default BackToControlButton;