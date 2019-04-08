import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as React from "react";

class PostPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Dialog
                open={this.props.addPost}
                onClose={this.props.closePost}
                scroll={this.props.scrollPage}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
                        nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras
                        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closePost} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.props.closePost} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
} export default PostPage