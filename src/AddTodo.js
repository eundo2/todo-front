import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item:{title:""} };
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
    }
    
    onButtonClick = (e) => {
        this.add(this.state.item);
        this.setState({item:{title:""}});
    }
    
    enterKeyEventHandler = (e) => {
        if(e.key == "Enter") {
            this.onButtonClick();
        }
    }

    render() {
        return(
            <Paper style={{margine:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField
                        placeholder="Add Todo here"
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler} // depre어쩌구 뜨더라 온키프레스
                        /> 
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button
                            fullWidth
                            color="secondary"
                            variant="outlined"
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
export default AddTodo;