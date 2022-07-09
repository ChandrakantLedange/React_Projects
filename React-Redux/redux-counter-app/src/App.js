import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import changeTheNumber from './reducers/upDown';
import { incNumber,decNumber } from './actions/index';

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
       <h1>Increment/Decrement Counter</h1>
       <h4>Using React and Redux</h4>

       <div className="quantity">
        <button className='decrementBtn' onClick={()=> dispatch(decNumber())} disabled={myState == 0}><span> - </span></button>
        <input name="quantity" type="text" className="quantity_input" value={myState}/>
        <button className='incrementBtn' onClick={()=>dispatch(incNumber(5))}><span> + </span></button>
       </div>
      </header>
    </div>
  );
}

export default App;
