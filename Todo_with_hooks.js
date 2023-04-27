import React, { useState} from 'react';
// import './App.css';
import pm from './pm.css';

const Todo_with_hooks = () => {

    const [inputValue, setInputValue] = useState("");
    const [inputList, setInputList] = useState([]);
    const [displayList1, setDisplayList1] = useState([]);
    const [displayList2, setDisplayList2] = useState([]);
    const [togglebtn, setTogglebtn] = useState(true);
    const [updateId, setUpdateId] = useState(0);

    const handleChange = (e) => {
      setInputValue(e.target.value);
    }

    const handleChange2 = (e) => { }

    const submitTask = () => {
          let i = inputList.length + 1;
          let task = inputValue;
            if (task === "") {alert("Please Enter Task")}
            else {
                  let addTask = {id:i, title:task, status:false};
                  setInputList([...inputList, addTask]);
                  setDisplayList1([...displayList1, addTask]);
                  setInputValue("");
            }     
    }

    const resetTask = () => {
      setInputValue("");
      setInputList([]);
      setDisplayList1([]);
      setDisplayList2([]);
    }

    const chxCheck = (id) => {
        let checkEntry = displayList1.filter(task => task.id !== id);
   
        let checkEntry2 = displayList1.map(task => {
        if(task.id === id){ 
          return ({id:task.id, title:task.title, status : true})
        }
        return task
      });

      checkEntry2 = checkEntry2.filter(task => task.id === id);
      
      setInputValue("");
      setDisplayList1([...checkEntry]);
      setDisplayList2([...displayList2, ...checkEntry2]);
    }
  
    const chxCheck2 = (id) => {
        let checkEntry21 = displayList2.map(task => {
          if(task.id === id){ 
            return ({id:task.id, title:task.title, status : false})
          }
          return task
        })

        checkEntry21 = checkEntry21.filter(task => task.id === id);
        let checkEntry22 = displayList2.filter(task => task.id !== id);
     
        setInputValue("");
        setDisplayList1([...displayList1, ...checkEntry21]);
        setDisplayList2([...checkEntry22]); 
        setTogglebtn(true);
          
  }
          
    const cancelTask = () => {
        setTogglebtn(true);
        setInputValue("");
    }
    
    const updateValue = (id,title) => {
        setTogglebtn(false);
        setUpdateId(id);
        setInputValue(title);
    }
    
    const updateTask = (id) => {
        let updatedTask = inputValue;

        let updatedEntry = displayList2.map(task => {
          if(task.id === updateId){
            return ({id:task.id, title:updatedTask, status : true})
          }
          return task
        });
        
        setTogglebtn(true);
        setInputValue("");
        setDisplayList2([...updatedEntry]);       
    }
      
    
    const deleteValue = (id) => {
        let deleteEntry = displayList2.filter(task => task.id !== id);
    
        setDisplayList2([...deleteEntry]);
        setInputValue("");    
        setTogglebtn(true);
        
    }
      
    return (<React.Fragment>
              <h1><center>TASK LIST</center></h1>
              <center>
              <input className="pm" type="text" onChange={handleChange} value={inputValue}/>
              {(togglebtn)?
                  <>
                    <button className="pm" onClick={submitTask}>Add Task</button>
                    <button className="pm" onClick={resetTask}>Reset</button>
                  </>
                :
                  <>
                    <button className="pm" onClick={updateTask}>Update Task</button>
                    <button className="pm" onClick={cancelTask}>Cancel</button>
                  </>
              }
              </center>
        {(displayList1.length !==0)&& <h3>To Do List</h3>}
        <ul>
              {displayList1.map((task,index) => {
                  return (<div key={task.id}>
                  <li> {task.title} <input type="checkbox" onClick={(e)=>{chxCheck(task.id)}} value={task.title}></input></li>
                  </div>);
                  })}

        </ul>
        {(displayList2.length !==0)&&<h3>Completed Task</h3>}
        <hr />
        <ul>
              {displayList2.map((task) => {
                  return (<div key={task.id}>
                  <li style={{textDecorationLine:"line-through"}}> {task.title}
                    <input type="checkbox" onClick={(e)=>{chxCheck2(task.id)}} checked={true} onChange={handleChange2} value={task.title}></input> 
                    <button className="pm" onClick={(e)=>{updateValue(task.id, task.title)}}>Update</button>
                    <button className="pm" onClick={(e) => {deleteValue(task.id)}}>Delete</button>
                  </li>
                  </div>);
                  })}

                </ul>
                
         </React.Fragment>);


              }

  

export default Todo_with_hooks;
