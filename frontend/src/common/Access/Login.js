import Button from "@material-ui/core/Button/index";
import React from "react";
import TextField from "@material-ui/core/TextField/index";
import Paper from "@material-ui/core/Paper/index";
import InputAdornment from '@material-ui/core/InputAdornment/index';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordCircle from '@material-ui/icons/LockRounded';
import FormControl from "@material-ui/core/FormControl/index";
//import {i18n, Link, withNamespaces} from '../i18n';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }


    // /**
    //  * GraphQL login mutation
    //  */
    // login() {
    //     //debugger
    //     let enqueueSnackbar = this.props.enqueueSnackbar;
    //     let {t} = this.props;
    //     return this.props.apolloClient.mutate({
    //         mutation: gql`
    //             mutation {
    //                 createSession
    //             }
    //         `
    //     })
    //     .then(async (result) => {
    //         if (result) {
    //             // Сессия создана - переходим на страницу с которой зашли на Login
    //             sessionStorage.clear();
    //             await this.props.apolloClient.resetStore().then(() => {
    //                 let session_token = result.data.createSession;
    //                 let redirect_url = decodeURIComponent(Router.query.returnPage);
    //                 if (redirect_url.indexOf("?") < 0) redirect_url = redirect_url + "?";
    //                 else redirect_url = redirect_url + "&";
    //                 redirect_url = redirect_url + "sessionId=" + session_token;
    //                 //Уведомление об успешной операции
    //                 enqueueSnackbar(t("success session"), {
    //                     variant: "success",
    //                     action: <Button size="small" color="inherit"><Clear color="inherit"/></Button>
    //                 });
    //                 Router.push(redirect_url);
    //             });
    //             return null;
    //         }
    //     })
    //     .catch((error) => {
    //         let msg;
    //         //Уведомление об ошибке
    //         console.log(JSON.stringify(error));
    //         if (error.networkError.result) msg = error.networkError.result.errors[0].message;
    //         else if (error.message) msg = error.message;
    //         enqueueSnackbar(t("error session") + ":" + msg, {
    //             variant: "error",
    //             action: <Button size="small" color="inherit"><Clear color="inherit"/></Button>,
    //         });
    //     });
    //
    // }

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
                            loginButton
                        </div>
                        <FormControl fullWidth>

                            <br/>
                            <TextField
                                style={{marginTop: "30%"}}
                                name="login"
                                placeholder="Login"
                                onChange={(input) => {
                                    this.state.login = input.target.value
                                }}
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
                                onChange={(input) => {
                                    this.state.password = input.target.value
                                }}
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
                                    let session = {user: {name: this.state.login}};
                                    sessionStorage.setItem("session", JSON.stringify(session));
                                    sessionStorage.setItem("session_password", this.state.password);
                                    this.login();
                                }}
                            >
                                loginButton
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