import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import green from '@material-ui/core/colors/green';
import Fab from '@material-ui/core/Fab';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Arrow from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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
    card: {
        margin: '10px',
        maxWidth: 345,
    },
    media: {
        height: 140,
    },

    margin: {
        bottom: '3px',
        left: '280px',
    },

    avatar: {
        width: 60,
        height: 60,
        borderColor: 'white',
        borderStyle: 'solid',
    }
});

class PostPage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    postCard = () => {
        const {classes, theme} = this.props;
        return (
            <div style={{
                display: "flex",
                overflow: "hidden",
                flexDirection: "column"
            }}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://2.bp.blogspot.com/-IasSAOybR6U/W4xOT3z8-xI/AAAAAAACNw8/mMk5VzqKw581GsvnCXdB_Z6jY6byRaVmgCKgBGAs/s1600/DSC07604.jpg"
                            title="Contemplative Reptile"
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '-30px',
                        }}>
                            <Avatar className={classes.avatar}
                                    src="https://pp.userapi.com/c626525/v626525326/235a2/yPJO-ftxBRI.jpg"/>
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Demo
                            </Typography>
                            <Typography component="p">
                                This is demo description of post content
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
                            <Arrow/>
                        </Fab>
                    </CardActions>
                </Card>
            </div>
        )
    };

    render() {
        const {classes, theme} = this.props;
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };

        const fabs = [
            {
                color: 'primary',
                className: classes.fab,
                icon: <AddIcon/>,
            },
            {
                color: 'secondary',
                className: classes.fab,
                icon: <EditIcon/>,
            },
            {
                color: 'inherit',
                className: classNames(classes.fab, classes.fabGreen),
                icon: <UpIcon/>,
            },
        ];

        return (
            <div>
                {this.postCard()}
                <div>
                    {fabs.map((fab, index) => (
                        <Zoom
                            key={fab.color}
                            in={this.state.value === index}
                            timeout={transitionDuration}
                            style={{
                                transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
                            }}
                            unmountOnExit
                        >
                            <Fab className={fab.className} color={fab.color}>
                                {fab.icon}
                            </Fab>
                        </Zoom>
                    ))}
                </div>
            </div>
        );
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PostPage);
