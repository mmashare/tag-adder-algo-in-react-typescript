import React, { useState } from 'react';
import Component1 from "./components/Component1";
import useFetch from "./components/useFetch"
import './App.css';

interface todotype {
  userId:number;
  id:number;
  title:string;
  body:string;
  data:string[];
  
}
const App:React.FC = () => {
  const [Data,loading] = useFetch<todotype[]>("https://jsonplaceholder.typicode.com/posts",[]);
  const [todo,setTodo] = useState<string>("");
  console.log(Data);
  if(loading){
    
    return <h4>loading .....</h4>;
  }

  const myfuncc = (name:string):string=>{
    return name;
  };

  return (
    <div className="App">
      
      <Component1
      name={"hms"}
      classs={"X"}
      marks={90}
      Ispass={true}
      myfunc={myfuncc}
      setTodo={setTodo}
      todoo={todo}

      />
    
    {Data.length >0? Data.map((i:todotype,index:number):JSX.Element=>{
      return (
        <div key={index}>
          <h4>title = {i.title}</h4>
          <h4>body = {i.body}</h4>
        </div>
      );
    }):""}
    </div>
  );
}

export default App;
