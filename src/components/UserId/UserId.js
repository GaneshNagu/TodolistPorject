import React, { Component } from 'react'

export class UserId extends Component {
    state={
        userid:''
    }

    newuseridaddition=(e)=>{
        return (this.setState({userid:e.target.value}))
    }

    clickSubmit=(e)=>{
        e.preventDefault();
        this.props.newuserid(this.state.userid);
        this.setState({userid:''})

    }


    render() {
        return (
            <div style={{textAlign:'center', width:'100%'}}>
              <form onSubmit={this.clickSubmit} style={{border:'2px solid black',margin:'auto',width:'35%',marginTop:'6%'}}>
                <div style={{border:'1px solid black',display:'block'}}>Enter the unique id</div>
                <input type="text"
                name="title"
                style={{padding:'5px',border:'1px solid black',width:'100%',textAlign:'center' }}
                placeholder="Enter Unique User id"
                value={this.state.userid}
                onChange={this.newuseridaddition}
                /><br/>
                <input
                 type="submit"
                 value="submit"
                 className="btn"
                // style={}

                 />

              </form>  
            </div>
        )
    }
}

export default UserId
