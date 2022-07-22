import './App.css';
import NavRouts from './navbar/NavRouts';
import { useSelector } from "react-redux";
function App() {

  const err = useSelector((state) => state.err);

  
  
  return (
    <div className="App">
           <div className={err.start?"activeError":"disableError"}>
        <div className={ err.status == 'error'?'error pad':'success pad'}>
        {err.err}
        </div>

      </div>
      <NavRouts/>

    </div>
  );
}

export default App;
