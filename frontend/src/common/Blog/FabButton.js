import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import {Link} from "react-router-dom";
import PostPage from "./PostPage";

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 3,
        right: theme.spacing.unit * 7,
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
});

//TODO: add state check of CRUD operation.
class FabButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, theme } = this.props;
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };

        //Types of Fab buttons
        const fabs = [
            {
                color: 'primary',
                className: classes.fab,
                icon: <AddIcon />,
            },
            {
                color: 'secondary',
                className: classes.fab,
                icon: <EditIcon />,
            },
            {
                color: 'inherit',
                className: classNames(classes.fab, classes.fabGreen),
                icon: <UpIcon />,
            },
        ];

        return (
            <div>
                {fabs.map((fab, index) => (
                    <Zoom
                        key={fab.color}
                        in={this.props.fabButton === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${this.props.fabButton === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                    >
                        <Fab className={fab.className} color={fab.color} component={Link} to="/post/add">
                            {fab.icon}
                        </Fab>
                    </Zoom>
                ))}
            </div>
        );
    }
}

FabButton.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FabButton);
