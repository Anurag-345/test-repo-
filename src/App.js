import "./App.css";
import User from "./components/User/User";
// import { useSelector} from "react-redux";
import { Header } from "./components/Header/Header";
import { useState ,useEffect } from "react";

function App() {
 const [userData,setuserData] = useState();
useEffect(() => {
  const data = fetch(" https://reqres.in/api/users?page=2");
  data
    .then((res) => res.json())
    .then((Finaldata) => {
      // console.log(Finaldata.data)
      setuserData(Finaldata.data);
    });
}, []);

console.log(userData[0]);
  
  return (
    <div className="App">
    <h1>app component</h1>
     {/* <User/>
     <Header/> */}
    </div>
  );
}

export default App;












// onClick={() => dispatchAction()}

// const fetchData = async () =>{
    //   const data = await fetch(" https://reqres.in/api/users?page=2");
    //   const res = await data.json();
    //   console.log(res.data);
    //   setuserData(res.data)
    // }
    // fetchData();


    