import { useState } from "react";
import { useDispatch } from "react-redux";

function User(props) {

  const [data,setdata] = useState()

  const setVal = (e) =>{

    setdata(e.target.value)

  }

  // console.log(data)

  const dispatch = useDispatch();

  const dispatchAction = () =>{
    dispatch({type:"setdata",payload : data})
  }

  return (
    <>
      <input type="text" onChange={setVal} />
      <button onClick={dispatchAction}>dispatch</button>
    </>
  );
}

export default User;
