import React from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import IconButton from '@material-ui/core/IconButton/index';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import Button from "@material-ui/core/Button/index";
import Select from "@material-ui/core/Select/index";
import MenuItem from "@material-ui/core/MenuItem/index";
import Menu from "@material-ui/core/Menu/index";
import ListItemIcon from "@material-ui/core/ListItemIcon/index";
import ListItemText from "@material-ui/core/ListItemText/index";
import InfoIcon from "@material-ui/icons/Info"
import LanguageIcon from "@material-ui/icons/Language"
import FormControl from "@material-ui/core/FormControl/index";
import InputLabel from "@material-ui/core/InputLabel/index";
import Input from "@material-ui/core/Input/index";
import Logout from "../Access/Logout"
import KotlinIcon  from './favicon.ico';
// import {i18n, withNamespaces} from '../i18n'

/**
 * Класс, предназначенный для отрисовки верхней панели приложения;
 * Отображает Login/Logout и профиль пользователя в зависимости от состояния;
 * Настройки оформления панели задаются в компоненте {@link withRoot};
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
                            <img src={KotlinIcon} alt="KotlinIcon" style={{width: "30px", height: "30px"}}/>
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

export default MenuAppBar;
