import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import AppBar from "../common/AppBar/AppBar";
import RoutingPath from "../common/Routing/RoutingPath";
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class App extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div style={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                flexDirection: "column"
            }}>
                <div style={{overflow: "hidden", flexBasis: 64}}>
                    <AppBar/>
                </div>
                <div className="container">
                    <RoutingPath/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
