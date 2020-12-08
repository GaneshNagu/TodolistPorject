import React, { Component } from 'react'
import propTypes from "prop-types";

export class Todolistitem extends Component {
  

    // completecheck=(e)=>{
    //     console.log(this.props)
    // }

    render() {
        const closButton={
            backgroundColor:'red',
            color:'white',
            padding:'5px 8px',
            borderRadius:'10%',
            float:'right'
        }
        
       const getStyle={
                borderBottom:'1px #ccc dotted',
                padding:'10px',
                textDecoration:this.props.todo.completed?'line-through':'none',
                backgroundColor:this.props.todo.completed?'#15e684':'#f4f4f4'
                 
        }
    

        const {task,id}= this.props.todo
        return (
            <div style={getStyle} key={this.props.todo.id}>
                <input type="checkBox" onChange={this.props.completeCheck.bind(this,id)} />{"  "}
                {task}
                <button style={closButton} onClick={this.props.delTodos.bind(this,id)}>Delete Task</button>
       </div>
        )
    }
}



Todolistitem.propTypes={
    todo:propTypes.object.isRequired
}

export default Todolistitem;
