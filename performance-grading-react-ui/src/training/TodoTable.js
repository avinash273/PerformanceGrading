import TodoRowItem from './TodoRowItem';
import React, {useState, useEffect} from "react";

const todos = [{rowNumber : 1, rowDescription : 'Wake up', rowAssigned : 'user 1'},
    {rowNumber : 2, rowDescription : 'Brush', rowAssigned : 'user 2'},
    {rowNumber : 3, rowDescription : 'Eat breakfast', rowAssigned : 'user 3'},
    {rowNumber : 4, rowDescription : 'Go to office', rowAssigned : 'user 4'}
  ];

function TodoTable() {

    const addTodo = () => {
        console.log(todos);
        if(todos.length > 0){
            const newTodo = {
                rowNumber : todos.length + 1,
                rowDescription : 'New Todo' + todos.length + 1,
                rowAssigned : 'user ' + todos.length + 1
            }
            todos.push(newTodo);
        }

        // console.log(todos);
    }
    return(
        <>
        <div className='mt-5 container'>
          <div className='card'>
          <h1>Your Todo's</h1>
            <table>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Assigned</th>
                </tr>
              </thead>
              <tbody>

                {
                  todos.map(task => (
                    <TodoRowItem
                    rowNumber = {task.rowNumber}
                    rowDescription = {task.rowDescription}
                    rowAssigned = {task.rowAssigned}
                    />
                  ))
                }

                <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>

              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default TodoTable;
