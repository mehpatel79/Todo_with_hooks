import React, { useState} from 'react';
// import './App.css';
import strike from './strike.css';

const Todo_with_hooks = () => {

    const [inputValue, setInputValue] = useState("");
    const [inputlist, setInputList] = useState([]);
    const [displayList1, setDisplayList1] = useState([]);
    const [displayList2, setDisplayList2] = useState([]);
    const [togglebtn, setTogglebtn] = useState(true);

    const submitTask = () => {
          let i = inputlist.length + 1;
          let task = inputValue;
            if (task === "") {alert("Please Enter Task")}
            else {
                  let addTask = {id:i, titel:task, status:false };
                  setInputList(addTask);
                  setDisplayList1(addTask);
                  setInputValue("");
            }     
      }

    
  

  

    

/*
  resetVal(){
    this.setState({inputValue : "", arlist : [], arlist2: []});
  }

  chxCheck(id){
    let checkEntry = this.state.arlist.filter(task => task.id !== id);
 
    let checkEntry2 = this.state.arlist.map(task => {
      if(task.id === id){ 
        return ({id:task.id, title:task.title, status : true})
      }
      return task
    });
    checkEntry2 = checkEntry2.filter(task => task.id === id);
    //this.state.arlist = [...checkEntry];
    //this.state.arlist2 = [...this.state.arlist2, ...checkEntry2];
    
    this.setState({inputValue: "", arlist: [...checkEntry], arlist2 : [...this.state.arlist2, ...checkEntry2]});   
  }

  chxCheck2(id){
    let checkEntry21 = this.state.arlist2.map(task => {
      if(task.id === id){ 
        return ({id:task.id, title:task.title, status : false})
      }
      return task
    })
    checkEntry21 = checkEntry21.filter(task => task.id === id);
    //this.state.arlist = [...this.state.arlist, ...checkEntry21];
    let checkEntry22 = this.state.arlist2.filter(task => task.id !== id);
    //this.state.arlist2 = [...checkEntry22];
  
    this.setState({inputValue: "", arlist:[...this.state.arlist, ...checkEntry21], arlist2:[...checkEntry22]});
      
  }


cancel(){
    togglebtn = true;
    this.setState({inputValue: ""});
}

  updval2(id,title){
    togglebtn = false;
    updid = id;
    this.setState({inputValue: title});
  }


  updval(id){
    let updtask = this.state.inputValue;
    let updEntry = this.state.arlist2.map(task => {
      if(task.id === updid){
        return ({id:task.id, title:updtask, status : true})
      }
      return task
    });
    togglebtn = true;
    this.setState({inputValue: "", arlist2 : updEntry});
      
  
  }
  



  delval(id){
    let delEntry = this.state.arlist2.filter(task => task.id !== id);
    this.state.arlist2 = [...delEntry]
    this.setState({inputValue: ""});
    
  }

 */
  
    return (
            <>
              <input type="text" value={inputValue}/>
              {(togglebtn)?
                  <>
                    <button >Add Task</button>
                    <button >Reset</button>
                  </>
                :
                  <>
                    <button >Update Task</button>
                    <button >Cancel</button>
                  </>
              }
        {/*(this.state.arlist.length !==0)?<h3>To Do List</h3>:<h3></h3>}
        <ul>
              {this.state.arlist.map((task,index) => {
                  return (<div key={task.id}>
                  <li> {task.title} <input type="checkbox" onClick={(e)=>{this.chxCheck(task.id)}} value={task.title}></input></li>
                  </div>);
                  })}

        </ul>
        <hr />
        {(this.state.arlist2.length !==0)?<h3>Completed Task</h3>:<h3></h3>}
        <ul>
              {this.state.arlist2.map((task) => {
                  return (<div key={task.id}>
                  <li style={{textDecorationLine:"line-through"}}> {task.title}
                    <input type="checkbox" onClick={(e)=>{this.chxCheck2(task.id)}} checked={true} onChange={this.handleChange2} value={task.title}></input> 
                    <button onClick={(e)=>{this.updval2(task.id, task.title)}}>Update</button>
                    <button onClick={(e) => {this.delval(task.id)}}>Delete</button>
                  </li>
                  </div>);
                  })}

                </ul>*/}
         </>);


              }

  

export default Todo_with_hooks;
