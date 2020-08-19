# IETI React JS Intro, Lab 01
Introduction to ReactJS.

## Autor
Luis Alejandro Jaramillo R.

## Part 1: Create a basic React application and understand React basics

1. Create a React App and test that it works:

```javascript
  npx create-react-app todo-app
  cd todo-app
  npm start
```
2. Open the `index.html` file and replace the title tag from React App to _TODO App_.

3. Open the `src/App.js` file and change the content of the paragraph tag (&lt;p&gt;) to `&lt;h1&gt;TODO React App&lt;/h1&gt;` (verify that the changes are reflected inmediately on your browser after you save without re-running your server).

4. Go to Codecademy, register and do the first two modules (JSX and React Components) of the following course: https://www.codecademy.com/learn/react-101

## Part 2: Create React Components for the TODO App

1. Create a new JavaScript file called *Todo.js* under the `src` folder and add the following code: 

```javascript

import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          //Add your code here to represent a TODO
        );
    }

}
```
2. Read about React Components & Props:  https://reactjs.org/docs/components-and-props.html

3. Once your understand these concepts, add the JSX code to display the TODO information. You will access the TODO data by using the react props *text*,  *priority* and *dueDate* as in the following example (notice the curly braces inside the HTML are used to evaluate a JavaScript expression).

```javascript
<h2>{this.props.text}  ... </h2> 
//Do not forget to add the other properties of your TODO!
```

4. Create another React Component called TodoList. This Component should render a list of Todo components. You can access the todo list by using the props: *this.props.todoList*. Start by importing the Todo component and the React module:

```javascript
import React from 'react';
import {Todo} from './Todo'
```

hint: You should use the map function to dynamically create your list inside the render method as in the following example: https://codepen.io/gaearon/pen/jrXYRR?editors=0011

You can also take a look into this React documentation: https://reactjs.org/docs/lists-and-keys.html 

5. Import your TodoList component into the App.js file and then add the <TodoList> tag to your code so that it loads the Todo list.
  You can use the following code to create some sample data:

```javascript
function App() {
      const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
          {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
 
 ...
   return (
    ...
    <TodoList todoList={todos}/>
    ...
   );
}
```

6. Run your application and verify that it works as expected:

```javascript
  npm start 
```

You may get a _no-useless-constructor_ warning. Ignore it for now.

## Part 3: Interacting with React Components

1. Go back the Codecademy website and do the last module (Components Interacting) of the _Learn ReactJS: Part I_ course.

2. Use the following code (taken from the React website) as a reference to create a form that captures the data of a Todo activity (text, priority and date), and adds the new object to the list.

```javascript
class TodoApp extends React.Component {
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
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
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
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}
```


# ReactJs Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
