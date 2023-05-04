import React, { useRef, useState} from 'react';
import pm from './pm.css';

const Todo_with_hooks = () => {

    const [inputValue, setInputValue] = useState("");
    const [counter, setCounter] = useState(0);
    const [taskList, setTaskList] = useState([]);
    const [isEdited, setIsEdited] = useState(true);
    // const [useId, setUseId] = useState(0);
    const idRef = useRef(0);

    const inputRef = useRef(null);

    const handleChange = (e) => {
      setInputValue(e.target.value);
      inputRef.current.focus();
    }


  
    const submitTask = () => {
          setCounter(counter + 1);
          let task = inputValue;
            if (task === "") {alert("Please Enter Task")}
            else {
                  let addTask = {id:counter, title:task, status:false};
                  setTaskList([...taskList, addTask]);
                  setInputValue("");
            }     
    }

    const resetTask = () => {
      setInputValue("");
      setCounter(0);
      setTaskList([]);
      }

    const selectTask = (id) => {    
        let taskArray = taskList.map(task => {
        if(task.id === id){ 
          return ({id:task.id, title:task.title, status : !task.status})
        }
        return task
      });
      
      setInputValue("");
      setTaskList([...taskArray]);
    
    }
  
        
    const cancelTask = () => {
        setIsEdited(true);
        setInputValue("");
    }
    
    const updateValue = (id,title) => {
        setIsEdited(false);
        //setUseId(id);
        idRef.current = id;
        setInputValue(title);
    }
    
    const updateTask = (id) => {

      let updatedTask = inputValue;
        let updatedList = taskList.map(task => {
          if(task.id === idRef.current){
            return ({id:task.id, title:updatedTask, status : task.status})
          }
          return task
        });
        
        setIsEdited(true);
        setInputValue("");
        setTaskList([...updatedList]);       
    }
  
      
    
    const deleteTask = (id) => {
        let deleteList = taskList.filter(task => task.id !== id);
    
        setTaskList([...deleteList]);
        setInputValue("");    
        setIsEdited(true);
        
    }
      
    return (<>
              <h1><center>TASK LIST</center></h1>
              <center>
              <input className="pm" type="text" onChange={handleChange} value={inputValue} ref={inputRef}/>
              {(isEdited)?
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
        {(taskList.length !==0)&& <h3>To Do List</h3>}
        <ul>
              {taskList.filter(task => task.status === false).map((task) => {
                  return (<div key={task.id}>
                  <li> {task.title} <input type="checkbox" onClick={(e)=>{selectTask(task.id)}} value={task.title} />
                    <button className="pm" onClick={(e)=>{updateValue(task.id, task.title)}}>Update</button>
                    <button className="pm" onClick={(e) => {deleteTask(task.id)}}>Delete</button>
                  </li>
                  </div>);
                  })}

        </ul>
        <hr />
        {(taskList.length !==0)&&  <h3>Completed Task</h3>}
        
        <ul>
              {taskList.filter(task => task.status === true).map((task) => {
                  return (<div key={task.id}>
                  <li style={{textDecorationLine:"line-through"}}> {task.title}
                    <input type="checkbox" onChange={(e)=>{selectTask(task.id)}} checked={task.status} value={task.title} /> 
                    <button className="pm" onClick={(e) => {deleteTask(task.id)}}>Delete</button>
                  </li>
                  </div>)
                  })}

                </ul>
                
         </>);


              }

  

export default Todo_with_hooks;
