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
        <button onClick={()=> dispatch(decNumber())}><span> - </span></button>
        <input name="quantity" type="text" className="quantity_input" value={myState}/>
        <button onClick={()=>dispatch(incNumber())}><span> + </span></button>
       </div>
      </header>
    </div>
  );
}

export default App;
