import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //Add your code here to represent a TODO
            <div>
                <h1>Text: {this.props.text}</h1>
                <h1>Priority: {this.props.priority}</h1>
                <h1>DueDate: {this.props.dueDate.toString()}</h1>
            </div>
        );
    }

}