import { getPastLaunches } from "./store/actions/launch";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(getPastLaunches())}>getPastLaunches</button>
  );
}

export default App;
