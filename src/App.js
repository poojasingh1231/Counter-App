import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INC'})
  }

  const decrement = () => {
    dispatch({type: 'DES'})

  }

  const AddBy = () => {
    dispatch({type: 'ADD', payload:10})
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={AddBy}>Add By 10</button>
    </div>
  );
}

export default App;
