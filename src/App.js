import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Todos from './components/Todos'
import './App.css';
import Header from './components/Header/Header';
import AddTodolist from './components/AddTodolist'
import { v4 as uuidv4 } from 'uuid';
import About from './components/Pages/About'
import axios from 'axios';
// import UserId from './components/UserId/UserId'
class App extends Component {
  state={
    todos:[
          ],
    userid:''
  }

  completeCheck=(id)=>{
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
         return todo;
      })
     
    })
    console.log("this is from comeplete check before the axios",this.state.todos);
    const newtaskcheck=this.state.todos
    axios.put('https://mytodolist-743cc-default-rtdb.europe-west1.firebasedatabase.app/MyTodolist.json',newtaskcheck)
    .then(response=>{
      console.log("this is from comeplete check",response.data);
        this.setState({todos:newtaskcheck})
         }).catch(err=>{
        console.log(err);
      })

    // console.log(this.state.todos)
  }

  componentDidMount(){
    axios.get('https://mytodolist-743cc-default-rtdb.europe-west1.firebasedatabase.app/MyTodolist.json').then(response=>{
         const fetcheorder=[];
                for (let key in response.data){
            fetcheorder.push({
                ...response.data[key],
                id:key
            })
            }
        this.setState({todos:fetcheorder})
         console.log("from component will update",this.state.todos,this.state.userid);

    }).catch(err=>{
        console.log(err);
      })
}


  delTodos=(id)=>{
    const newtask=[...this.state.todos.filter(todo=>todo.id!==id)]
    this.setState({todos:newtask})
    console.log("after updating the things",[...this.state.todos.filter(todo=>todo.id!==id)])
    
    axios.put('https://mytodolist-743cc-default-rtdb.europe-west1.firebasedatabase.app/MyTodolist.json',newtask)
    .then(response=>{
        this.setState({todos:newtask})
         console.log("from Delete things",this.state.todos);
      }).catch(err=>{
        console.log(err);
      })

    
    
  }
 


  AddTodo=(newTask)=>{
    const newTtaskTodo={
      id:uuidv4(),
      task:newTask,
      completed:false
    }
    axios.post('https://mytodolist-743cc-default-rtdb.europe-west1.firebasedatabase.app/MyTodolist.json',newTtaskTodo)
    .then(res=>    
      this.setState({todos:[...this.state.todos,newTtaskTodo]})
     ).catch(err=>{
           console.log(err);
         })
         
      
    }
    newuserid=(userid)=>{
      const newuserid=userid
      this.setState({userid:newuserid})
      console.log(this.state.userid)
      if(newuserid!==this.state.userid){
        this.componentDidMount();
      }
            
    }
   

  render() {
    return (
      <Router>
      <div className="container">
      <Header/>
      {/* <Route path="/userid" render={props=>(
        <React.Fragment>
          <UserId newuserid={this.newuserid}/>
        </React.Fragment>
      )} /> */}
       
      <Route exact path="/" render={props=>(
        <React.Fragment>
        <AddTodolist AddTodo={this.AddTodo}/>
        <Todos className="tasksclass" todos={this.state.todos} completeCheck={this.completeCheck} delTodos={this.delTodos}/>
        </React.Fragment>
        )}/>
        <Route path='/about' component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;
