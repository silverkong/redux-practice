import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const countUp = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };
  const countDown = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };

  const countUp5 = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const countDown5 = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "bina", password: "1234" } });
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={countUp}>+1</button>
      <button onClick={countDown}>-1</button>
      <button onClick={countUp5}>+5</button>
      <button onClick={countDown5}>-5</button>

      <h1>
        ID : {id}, PW : {password}
      </h1>
      <button onClick={login}>Login!</button>
    </div>
  );
}

export default App;
