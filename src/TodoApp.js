import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="new-todo">
                            What needs to be done?
                            <input
                                id="new-todo"
                                onChange={(e)=> this.setState({text:e.target.value})}
                                value={this.state.text}
                            />
                        </label>
                        <label>
                            What is the priority?
                            <input
                                id="priority"
                                onChange={(e)=> this.setState({priority:e.target.value})}
                                value={this.state.priority}
                            />
                        </label>
                        <label>
                            What is the date?
                            <input
                                id="dueDate"
                                onChange={(e)=> this.setState({dueDate:e.target.value})}
                                value={this.state.dueDate}
                            />
                        </label>
                        <button>
                            Add #{this.state.items.length + 1}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            priority: this.state.priority,
            dueDate: this.state.dueDate
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            id: '',
            priority: '',
            dueDate: ''
        }));
    }
}

