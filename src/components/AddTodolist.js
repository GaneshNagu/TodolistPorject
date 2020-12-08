import React, { Component } from 'react'

export class AddTodolist extends Component {
    state={
        newTask:''
    }

    newTaskaddition=(e)=>{
        return(
            this.setState({newTask:e.target.value})
        )
    }

    clickSubmit=(e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state.newTask);
        this.setState({newTask:''})
    }

    render() {
        return (
            <div>
              <form onSubmit={this.clickSubmit} style={{display:'flex'}}>
                <input type="text"
                name="title"
                style={{flex:'10',padding:'5px'}}
                placeholder="Add Todo tasks"
                value={this.state.newTask}
                onChange={this.newTaskaddition}
                />
                <input
                 type="submit"
                 value="submit"
                 className="btn"
                 style={{flex:'1'}}

                 />

              </form>  
            </div>
        )
    }
}

export default AddTodolist
