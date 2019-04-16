import Button from "@material-ui/core/Button/index";
import React from "react";
import TextField from "@material-ui/core/TextField/index";
import Paper from "@material-ui/core/Paper/index";
import InputAdornment from '@material-ui/core/InputAdornment/index';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordCircle from '@material-ui/icons/LockRounded';
import FormControl from "@material-ui/core/FormControl/index";
import {ACCESS_TOKEN} from "../util";
import { login } from '../util/APIUtils';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
                const loginRequest = Object.assign({});
                login(loginRequest)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        this.props.onLogin();
                    }).catch(error => {
                    if(error.status === 401) {
                       alert('Your Username or Password is incorrect. Please try again!');

                    } else {
                        alert('Sorry! Something went wrong. Please try again!');
                    }
                });
            }

    render() {
        return (
            <div style={{
                margin: "auto",
                maxWidth: 400,
                paddingTop: 40
            }}>
                <Paper style={{
                    width: 290,
                    height: 10,
                    margin: "auto",
                    position: "relative"
                }} elevation={8}/>
                <Paper style={{
                    top: -5,
                    width: 300,
                    margin: "auto",
                    position: "relative"
                }} elevation={10}>
                    <form style={{
                        paddingTop: 40,
                        padding: 30
                    }}>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff",
                            fontSize: "34px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            backgroundColor: "#06b18b",
                            margin: "-29px",
                            padding: "30px 0",
                            borderRadius: "5px"
                        }}>
                            login
                        </div>
                        <FormControl fullWidth>

                            <br/>
                            <TextField
                                style={{marginTop: "30%"}}
                                name="login"
                                placeholder="Login"
                                // onChange={(input) => {
                                //     this.state.login = input.target.value
                                // }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <br/>
                            <TextField
                                name="password"
                                placeholder="Password"
                                // onChange={(input) => {
                                //     this.state.password = input.target.value
                                // }}
                                type="password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PasswordCircle/>
                                        </InputAdornment>
                                    ),
                                }}

                            />
                            <br/>
                            <br/>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.handleSubmit();
                                }}
                            >
                                login
                            </Button>
                            <br/>
                        </FormControl>
                    </form>                   
                </Paper>
            </div>
        );
    }
}

export default Login;