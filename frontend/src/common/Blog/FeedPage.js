import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Arrow from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import React from 'react';
import FabButton from './FabButton';
import PostPage from "./PostPage";

const styles = theme => ({
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

class FeedPage extends React.Component {
    state = {
        fabButton: 0,
    };

    render() {
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
                <FabButton
                    fabButton={this.state.fabButton}
                />
            </div>
        );
    }
}

FeedPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FeedPage);
