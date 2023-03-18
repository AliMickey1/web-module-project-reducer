import React from 'react';
import { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import { addMemory, applyNumber, changeOperation, clearDisplay, memoryRecall, memoryClear } from '../actions';


import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

    // const handle1Change = () => {
    //   dispatch(addOne())
    // }

    const handleNumChange = (number) => {
      dispatch(applyNumber(number))
    }

    const handleOperatorClick = (operator) => {
      dispatch(changeOperation(operator))
    }

    const handleClear = () => {
      dispatch(clearDisplay())
    }

    const handleMemoryPlus = () => {
      dispatch(addMemory())
    }

    const handleMemoryRecall = () => {
      dispatch(memoryRecall())
    }

    const handleMemoryClear = () => {
      dispatch(memoryClear())
    }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryPlus}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              {/* <CalcButton value={1} onClick={handle1Change}/> */}
              <CalcButton value={1} onClick={()=>handleNumChange(1)}/>
              <CalcButton value={2} onClick={()=>handleNumChange(2)}/>
              <CalcButton value={3} onClick={()=>handleNumChange(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>handleNumChange(4)}/>
              <CalcButton value={5} onClick={()=>handleNumChange(5)}/>
              <CalcButton value={6} onClick={()=>handleNumChange(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>handleNumChange(7)}/>
              <CalcButton value={8} onClick={()=>handleNumChange(8)}/>
              <CalcButton value={9} onClick={()=>handleNumChange(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>handleOperatorClick("+")}/>
              <CalcButton value={"*"} onClick={()=>handleOperatorClick("*")}/>
              <CalcButton value={"-"} onClick={()=>handleOperatorClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
