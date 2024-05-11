import React, { useState } from "react";
import './components/todo.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
  };

  const [inpValue, setInpValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    if(inpValue.trim() !== ""){
      setTodos([...todos ,{ task: inpValue}])
      setInpValue('')
      console.log(todos)
    }
  }
 
  return (
    <div className="App">
       <div className={`all ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="bitmap">
                <div className="bitmap_bck"></div>
                <div className="bt_container">
                    <div className="bt_container_text">
                        <h3>TODO</h3>
                        <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} onClick={toggleDarkMode}></i>
                    </div>

                    <div className="input">
                        <input type="checkbox" className="checkbox" />
                        <input type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)} className="input_text" placeholder="Create a new todo..." />
                        <button onClick={addToDo} className="button_add">Add</button>
                    </div>

                    <div className="list">
                        <div className="list_left">
                            <input type="checkbox" className="checkbox" />
                            <p>dfghjkl;</p>
                        </div>

                        <div className="list_right">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

