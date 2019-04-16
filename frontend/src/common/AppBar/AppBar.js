import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KotlinIcon  from './favicon.ico';
const styles = {
    root: {
        margin: "10px",
        display: 'flex',
        alignItems: 'center',
        width: "98%",
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

function AppBar(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} style={{backgroundColor: "#009688"}}>

                <IconButton color="inherit" className={classes.iconButton} aria-label="Menu">
                    <img src={KotlinIcon} alt="KotlinIcon" style={{width: "30px", height: "30px"}}/>
                </IconButton>
                <InputBase color="inherit" className={classes.input} placeholder="Search Google Maps" />
                <IconButton color="inherit" className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} />
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>

            </Paper>
        </div>
    );
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
