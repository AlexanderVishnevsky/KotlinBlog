import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Login from "../common/Access/Login";
import AppBar from "../common/AppBar/AppBar";
import FeedPage from "../common/Blog/FeedPage";
import PostPage from "../common/Blog/PostPage";
import PrivateRoute from "../common/Routing/PrivateRoute";
import {Route, Switch} from 'react-router-dom'
import {ACCESS_TOKEN} from "../common/util";
import {getCurrentUser} from "../common/util/APIUtils";
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.loadCurrentUser();
    }

    handleLogout(redirectTo="/") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

        alert('Polling App');
    }

    handleLogin() {
        alert("You're successfully logged in.");
        this.loadCurrentUser();
        this.props.history.push("/");
    }

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
                    <Switch>
                        <Route exact path="/"
                               render={(props) => <FeedPage isAuthenticated={this.state.isAuthenticated}
                                                            currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                        </Route>
                        <Route path="/api/login"
                               render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                        {/*<Route path="/api/register" component={Signup}></Route>*/}
                        {/*<Route path="/users/:username"*/}
                        {/*       render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>*/}
                        {/*</Route>*/}
                        <PrivateRoute authenticated={this.state.isAuthenticated} path="/post/add" component={PostPage} handleLogout={this.handleLogout}/>
                        {/*<Route component={NotFound}></Route>*/}
                    </Switch>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
