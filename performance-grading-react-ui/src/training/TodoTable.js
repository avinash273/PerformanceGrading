import TodoRowItem from './TodoRowItem';

function TodoTable() {

    const todos = [{rowNumber : 1, rowDescription : 'Wake up', rowAssigned : 'user 1'},
        {rowNumber : 2, rowDescription : 'Brush', rowAssigned : 'user 2'},
        {rowNumber : 3, rowDescription : 'Eat breakfast', rowAssigned : 'user 3'},
        {rowNumber : 4, rowDescription : 'Go to office', rowAssigned : 'user 4'}
      ];

    return(
        <>
        <div className='mt-5 container'>
          <div>
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

              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default TodoTable;
