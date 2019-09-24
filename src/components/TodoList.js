import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import todoService from '../services/todo-service'

class TodoList extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    todoService.getAllTodos()
    .then((response) => {
      this.setState({
        todos: response.data,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleDeleteClick = id => {
    const { todos } = this.state;

    todoService.deleteTodo(id).then(() => {
      const filteredTodos = todos.filter(todo => {
        return todo._id !== id;
      });

      this.setState({
        todos: filteredTodos,
      });
    });
  };

  render() {
    const {todos} = this.state;

    return (
      <div className="container">
        <div className="title-icon-div title-underline">
          <h3 className="title">TO DO LIST</h3>
          <Link to='/createTodo'>
            <img className="icon" src="../../images/add-icon.png" alt="add to do task ikon"/>
          </Link>
        </div>
        <section>
          {todos.length > 0 ? todos.map((todo) => {
            return (
              <article className="container-border" key={todo._id}>
                <div className="title-icon-div">
                  <h3>{todo.title}</h3>
                  <div className="title-icon-div">
                    <Link to={`/updateTodo/${todo._id}`}>
                      <img className="icon" src="../../images/edit-icon.png" alt="add to do task ikon"/>
                    </Link>
                    <button onClick={() => {
                      this.handleDeleteClick(todo._id)
                    }}>X</button>
                  </div>
                </div>
                <p>{todo.body}</p>
               
              </article>
            )
          }) : <p>You have no to do's on the list</p>}
        </section>

        
      </div>
    )
  }
}

export default TodoList;
