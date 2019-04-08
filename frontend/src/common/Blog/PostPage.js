import {Paper, TextField} from "@material-ui/core";
import * as React from "react";

class PostPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Paper style={{
                    display: "flex",
                    marginTop: "20px",
                    width: "90%",
                    flexDirection: "column",
                }}>
                    <TextField variant="outlined"  label="Title" style={{margin:"20px"}}>
                    </TextField>
                    <br/>
                    <TextField variant="outlined" multiline   rows="20"  label="Body"style={{margin:"20px"}}>
                    </TextField>
                </Paper>
            </div>
        )
    }
}

export default PostPage