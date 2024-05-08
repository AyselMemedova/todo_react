// // import React from 'react'
// import "./todo.css"
// import React, { useState } from 'react';

// const ToDoItem = () => {
//     const [isDarkMode, setDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setDarkMode(!isDarkMode);
//     };


// // const ToDoItem = () => {
//     return (
//         <div className={`all ${isDarkMode ? 'dark-mode' : ''}`}>
//             <div className='bitmap' >
//                 <div className='bitmap_bck'></div>
//                 <div className='bt_container'>
//                 <div className='bt_container_text'>
//                     <h3>TODO</h3>
//                     {/* <i class="fa-solid fa-moon"></i> */}
//                     <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} onClick={toggleDarkMode}></i>
//                 </div>

//                 <div className='input'>
//                     <input type="checkbox" className='checkbox' />
//                     <input type="text" className='input_text' placeholder='Create a new todo...' />
//                     <button id="addBtn" className="button_add">Add</button>
//                 </div>

//                 <div className='list'>
//                     <div className='list_left'>
//                     <input type="checkbox" className='checkbox'  />
//                     <p>dfghjkl;</p>
//                     </div>

//                     <div className='list_right'>
//                     <i class="fa-solid fa-xmark"></i>

//                     </div>
                    

//                 </div>
//                 </div>
               
//             </div>
//         </div>
//     )
// }

// export default ToDoItem




import React, { useState } from 'react';
import './todo.css';

const ToDoItem = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (
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
                        <input type="text" className="input_text" placeholder="Create a new todo..." />
                        <button className="button_add">Add</button>
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
    );
};

export default ToDoItem;
