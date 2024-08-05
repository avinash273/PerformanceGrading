import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import TodoTable from './training/TodoTable';

function App() {
    return (
        <div className="mt-5" >
            <Students/>
            <TodoTable/>

        </div>
    );
}

export default App;
