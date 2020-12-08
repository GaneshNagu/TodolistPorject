import React, { Component } from 'react';
import Todolistitem from './Todolistitem'
import propTypes from 'prop-types';

class Todos extends Component {
    
  render() {
      // console.log(this.props.todos);
      // const todos={this.props.todos};

    
    return( this.props.todos.map((todo)=>(
                <Todolistitem key={todo.id}  completeCheck={this.props.completeCheck} delTodos={this.props.delTodos} todo={todo}/>
        ))
      
        )}
}




Todos.propTypes={
  todos:propTypes.array.isRequired
}

export default Todos;
