import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterState, iaAddValue, listApi,statusState } from './store/selector';
import { addNumber, subtractNumber } from './counterSlice.js/counterSlice';
import { addString, deleteValue } from './addValue/addValueSlice';
import {  useEffect, useState } from 'react';
import { delayShowListItem, handleBtnFakeApis } from './addValue/addValueSlice';  
import { Skeleton } from 'antd'








function App() {



  const secondState = useSelector(iaAddValue)
  const dataApis = useSelector(listApi)
  const countNumber = useSelector(counterState)
  const status = useSelector(statusState)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [inputValueThunk, setInputValueThunk] = useState('')
  const [inputSearch, setInputSearch] = useState('')


  console.log("dataAPI : " ,dataApis)
  return (
    <div className="App">

      <h1>ReduxToolkit Axios</h1>
      <h2>??? hai huoc thiet su</h2>

      <h2>{countNumber}</h2>
      <button onClick={ () => dispatch(subtractNumber([1,2,3,4]))} style={{padding :'5px 10px', margin : "5px"}}>-</button>
      <button onClick={ () => dispatch(addNumber())} style={{padding :'5px 10px', margin : "5px"}}>+</button>


      <h2>--------------------------------------------------------------</h2>
      <input value={inputSearch} onChange = {(e) => setInputSearch(e.target.value)} placeholder='Seaerch name film'></input>
      <button onClick={() => dispatch(handleBtnFakeApis(inputSearch))}>GET APIS</button>
      <div className='wrapper'>
        {status === 'loading' ?  <Skeleton active/> : dataApis.map((item, index) => {
         if (item.id.startsWith('t')){
          return <div key={index} className='item'>
            <img width='100%' height={'100%'}  src={item.i?.imageUrl} prop= {item.i?.imageUrl}></img>
            <li className='info'>
              <div>{item.l}</div>
              <span>{item.y}</span>
            </li>
          </div>
         }
        }) }
      </div>
    

      <h2>--------------------------------------------------------------</h2>


      <input value={inputValueThunk} onChange = {( e => setInputValueThunk(e.target.value))} />
      <button onClick={() => dispatch(delayShowListItem(inputValueThunk))}>Test Thunk FC</button>
      
      <h2>--------------------------------------------------------------</h2>

      <input value={inputValue} onChange = {( e => setInputValue(e.target.value))} />
      <button onClick={ () => dispatch(addString(inputValue))} style={{padding :'5px 10px', margin : "5px"}}>add if count % 2</button>
    
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
