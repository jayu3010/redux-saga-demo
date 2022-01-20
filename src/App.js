import "./App.css";
import { useEffect } from "react";
import { petIncrement, petDecrement, getUsers,petFAVORITE_INCREASED,petfavDECREASED } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const petdata = useSelector((state) =>state.petCounter);
  const petDec = useSelector((state) =>state.petFavorite);


  
  const dataUser=()=>{
  dispatch(getUsers());

}

  return (
    <>
    <div className="App">
      <h1>Welcome to React Redux Saga Crash Course</h1>
      <button onClick={dataUser}>Click For data</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>

    <button onClick={()=>dispatch(petIncrement(1))}>Pet Increment</button>
    <p>Petounter{petdata}</p>
    <button onClick={()=>dispatch(petfavDECREASED(1))}>Pet Decriment</button>

    <p>Petounter{petDec}</p>
</>
  );
}

export default App;
