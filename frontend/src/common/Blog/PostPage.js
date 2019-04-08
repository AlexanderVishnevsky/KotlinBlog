import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
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
                fullWidth={true}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title">   <TextField
                    autoFocus
                    margin="dense"
                    id="Title"
                    label="Title"
                    variant='outlined'
                    fullWidth
                /></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Body"
                            label="Body"
                            variant='outlined'
                            fullWidth
                            multiline
                        />
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