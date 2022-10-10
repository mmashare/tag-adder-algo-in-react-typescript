import React, { useState } from "react"

interface kk {
    name:String,
    classs:string,
    marks:number,
    Ispass:boolean,
    myfunc:(name:string)=> string;
    setTodo:   React.Dispatch<React.SetStateAction<string>>;
    todoo:string;
}

const Component1:React.FC<kk> = ({name,classs,marks,Ispass,myfunc,todoo,setTodo}) =>{
    const [info,setInfo] = useState<string>("NONE");
    const [listtodo,setListTodo] = useState<string[]>([]);
    const todoAdder = ():void=>{
        

        if(listtodo.length === 0){
            setListTodo([...listtodo,todoo])
        
        setTodo("")
        }else{
            setListTodo([...listtodo,",",todoo])
        
        setTodo("")
        }
        
    
    }
    return (
        <div>
            <h2>{name}</h2>
            <h2>{classs}</h2>
            <h2>{marks}</h2>
            <h2>{Ispass}</h2>
            <h2>{myfunc("llllll")}</h2>
            <h2>{info}</h2>
            <h3>{listtodo}</h3>
            <input type="text" 
            value={info}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                setInfo(e.target.value)
            }}/>
            <button onClick={()=>{setInfo("NONE")}}>reset</button>
            <input type="text" 
            value={todoo}
            onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>{
                
                setTodo(e.target.value);
            }}/>
            <button onClick={todoAdder}>todo Adder</button>
        </div>
);
}

export default Component1;