import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from "../common/AppBar";
import withRoot from '../withRoot';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

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

        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
