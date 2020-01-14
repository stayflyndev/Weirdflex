import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'red'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar:{
        backgroundColor: 'red'
    }
}));

const Navagation = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button component={Link} to="/">
                            Home</Button>
                    </Typography>
                    <Button component={Link} to="/cart">
                        Cart</Button>
                </Toolbar>

            </AppBar>
        </div>
    );
}

export default Navagation;
