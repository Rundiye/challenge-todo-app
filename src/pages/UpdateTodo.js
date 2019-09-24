import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import todoService from '../services/todo-service'

class UpdateTodo extends Component {
  state = {
    title: '',
    body: '',
    todoId: this.props.match.params.id
  }

  componentDidMount() {
    todoService
    .getTodo(this.state.todoId)
    .then(response => {
      const { title, body } = response.data;
      this.setState({
        title,
        body
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = (event) => {
    const {title, body} = this.state;
    event.preventDefault();
    
    todoService.updateTodo({
      title,
      body
    })
    .then(response => {
      this.setState({
        redirect: true,
      })
    })
    .catch(error => console.log(error))
  }
  
  render() {
    const {title, body, redirect} = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            name='title' 
            id='title' 
            required onChange={this.handleOnChange} 
            vale={title} />
          </div>

          <div>
            <label htmlFor="body">Description</label>
            <input 
            type="text" 
            name='body' 
            id='body' 
            required 
            onChange={this.handleOnChange} 
            vale={body} />
          </div>
          <button>
            <p>Update Task</p>
          </button>
        </form>    
        {redirect ? <Redirect to='/' /> : null} 
      </div>
    )
  }
}

export default UpdateTodo;
