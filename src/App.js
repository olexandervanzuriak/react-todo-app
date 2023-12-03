import './App.css';
import CheckTodo from './components/CheckTodo';
import { TaskContextProvider } from './context/task-context';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  );
}

export default App;
