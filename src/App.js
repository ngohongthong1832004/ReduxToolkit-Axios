import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterState, iaAddValue } from './store/selector';
import { addNumber, subtractNumber } from './counterSlice.js/counterSlice';
import { addString, deleteValue } from './addValue/addValueSlice';
import { useState } from 'react';

function App() {
  const secondState = useSelector(iaAddValue)
  const countNumber = useSelector(counterState)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <h1>ReduxToolkit Axios</h1>
      <h2>??? hai huoc thiet su</h2>

      <h2>{countNumber}</h2>
      <button onClick={ () => dispatch(subtractNumber([1,2,3,4]))} style={{padding :'5px 10px', margin : "5px"}}>-</button>
      <button onClick={ () => dispatch(addNumber())} style={{padding :'5px 10px', margin : "5px"}}>+</button>

      <h2>--------------------------------------------------------------</h2>

      <input value={inputValue} onChange = {( e => setInputValue(e.target.value))} />
      <button onClick={ () => dispatch(addString(inputValue))} style={{padding :'5px 10px', margin : "5px"}}>add</button>
    
      <ul>
        {secondState.map((item, index) => {
          return <li key={index}>
              {item}
              <button onClick={ () => dispatch(deleteValue(index))} style={{padding :'5px 10px', margin : "5px"}}>delete</button>
           </li>
        })}
      </ul>
     
    </div>
  );
}

export default App;
