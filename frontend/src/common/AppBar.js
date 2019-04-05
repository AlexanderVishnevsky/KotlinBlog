import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info"
import LanguageIcon from "@material-ui/icons/Language"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Logout from "./Logout"
// import {i18n, withNamespaces} from '../i18n'

/**
 * Класс, предназначенный для отрисовки верхней панели приложения;
 * Отображает Login/Logout и профиль пользователя в зависимости от состояния;
 * Настройки оформления панели задаются в компоненте {@link createPageContext};
 * Более подробно о компоненте AppBar:
 * @link https://material-ui.com/api/app-bar/
 */

let i18n;
class MenuAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
            open: false,
            openLanguage: false,
            anchorEl: null,
        }
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClickClose = () => {
        this.setState({open: false, anchorEl: null});
    };
    handleLanguageClickOpen = () => {
        this.setState({openLanguage: true});
    };

    handleLanguageClickClose = () => {
        this.setState({openLanguage: false, anchorEl: null});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };
    handleChange = name => event => {
        i18n.changeLanguage(i18n.language === "rus" ? "eng" : "rus");
        this.setState({[name]: String(event.target.value)});
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const {t} = this.props;
        return (
            <div style={{
                flexGrow: 1,
                marginBottom: '5%'
            }}>
                <AppBar>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" style={{
                            marginLeft: -12,
                            marginRight: 20
                        }}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                          Kotlin blog
                        </Typography>
                        {this.props.session && (
                            <React.Fragment>
                               <Logout {...this.props}/>
                                <div>
                                    <IconButton
                                        aria-owns={open ? 'menu-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle/>
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={this.handleClickClose}
                                    >
                                        <MenuItem onClick={this.handleClickOpen}>
                                            <ListItemIcon>
                                                <InfoIcon/>
                                            </ListItemIcon>
                                            <ListItemText inset primary={t('info')}/>
                                        </MenuItem>
                                        <MenuItem onClick={this.handleLanguageClickOpen}>
                                            <ListItemIcon>
                                                <LanguageIcon/>
                                            </ListItemIcon>
                                            <ListItemText inset primary={t('language')}/>
                                        </MenuItem>
                                    </Menu>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClickClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle>{t("user info")}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                <div>
                                                    <pre>Session: {JSON.stringify(this.props.session, null, 2)}</pre>
                                                </div>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClickClose} color="primary" autoFocus>
                                                Ok
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                    {/*Меню выбора языка*/}
                                    <Dialog
                                        open={this.state.openLanguage}
                                        onClose={this.handleLanguageClickClose}
                                    >
                                        <DialogTitle>{t('choose language')}</DialogTitle>
                                        <DialogContent>
                                            <form>
                                                <FormControl>
                                                    <InputLabel htmlFor="age-native-simple">{t('language')}</InputLabel>
                                                    <Select
                                                        native
                                                        value={this.state.language}
                                                        onChange={this.handleChange('language')}
                                                        input={<Input id="age-native-simple"/>}
                                                    >
                                                        <option value=""/>
                                                        <option value="eng">English</option>
                                                        <option value="rus">Русский</option>
                                                    </Select>
                                                </FormControl>
                                            </form>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleLanguageClickClose} color="primary" autoFocus>
                                                Ok
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </React.Fragment>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default (MenuAppBar);
