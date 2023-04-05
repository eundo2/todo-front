import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item:props.item, readOnly:true };
        this.delete = props.delete;
        this.update = props.update;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }
    
    offReadOnlyMode = () => {
        this.setState({readOnly:false}, () => {
            console.log("Readonly?", this.state.readOnly);
        });
    }
    
    enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            this.setState({readOnly:true});
            this.update(this.state.item);
        }
    }
    
    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
    }
    
    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = thisItem.done? false:true;
        this.setState({readOnly:true});
        this.update(this.state.item);
    }

    render() {
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox 
                    checked={item.done}
                    onChange={this.checkboxEventHandler} 
                />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked", readOnly:this.state.readOnly}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyPress={this.enterKeyEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete"
                        onClick={this.deleteEventHandler}>
                            <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
export default Todo;