import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import todoService from '../services/todo-service'

class CreateTodo extends Component {
  state = {
    title: '',
    body: '',
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

    todoService.createTodo({
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
            <p>Add New Task</p>
          </button>
        </form>    
        {redirect ? <Redirect to='/' /> : null} 
      </div>
    )
  }
}

export default CreateTodo;
