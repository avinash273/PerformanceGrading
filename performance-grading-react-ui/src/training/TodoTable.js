import TodoRowItem from './TodoRowItem';
import React, {useState, useEffect} from "react";
import AddTodo from './AddTodo';

function TodoTable() {

  const [todos, setTodos] = useState([
    {rowNumber : 1, rowDescription : 'Wake up', rowAssigned : 'user 1'},
    {rowNumber : 2, rowDescription : 'Brush', rowAssigned : 'user 2'},
    {rowNumber : 3, rowDescription : 'Eat breakfast', rowAssigned : 'user 3'},
    {rowNumber : 4, rowDescription : 'Go to office', rowAssigned : 'user 4'}
  ]);

    const addTodo = (description, assigned) => {
      let rowNumber = 0;
      if(todos.length > 0){
            const newTodo = {
                rowNumber : todos.length + 1,
                rowDescription : description,
                rowAssigned : assigned
            }
            setTodos(todos => [...todos, newTodo])
        }
        //test again and again and again

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
                    key = {todos.rowNumber}
                    rowNumber = {task.rowNumber}
                    rowDescription = {task.rowDescription}
                    rowAssigned = {task.rowAssigned}
                    />
                  ))
                }

                <AddTodo addTodo={addTodo}/>
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default TodoTable;
