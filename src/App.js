import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { count } from './counterSlice.js/counterSlice'
import { addNumber, subtractNumber } from './counterSlice.js/counterSlice';

function App() {

  const countNumber = useSelector(count)
  const dispatch = useDispatch()

  console.log("countNumber :",countNumber)
  return (
    <div className="App">
      <h1>ReduxToolkit Axios</h1>
      <h2>??? hai huoc thiet su</h2>

      <h2>{countNumber}</h2>
      <button onClick={ () => dispatch(subtractNumber([1,2,3,4]))} style={{padding :'5px 10px', margin : "5px"}}>-</button>
      <button onClick={ () => dispatch(addNumber())} style={{padding :'5px 10px', margin : "5px"}}>+</button>
    </div>
  );
}

export default App;
