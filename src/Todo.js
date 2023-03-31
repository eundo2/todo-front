import { Checkbox, InputBase, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item:props.item };
    }

    render() {
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox />
                <ListItemText>
                    <InputBase 
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        );
    }
}
export default Todo;