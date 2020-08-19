import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
    render() {

        const listTodos = this.props.todoList;
        const listTodoItems = listTodos.map((todo,i) =>
            <li key={i}>
                <Todo priority = {todo.priority}  text = {todo.text}  dueDate = {todo.dueDate}></Todo>;
            </li>
        );
        return <ul>{listTodoItems}</ul>;
    }
}