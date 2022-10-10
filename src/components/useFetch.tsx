import axios from "axios";
import React from "react"
import { useState } from "react";
import { useEffect } from "react";

interface kk {
    name:String,
    classs:string,
    marks:number,
    Ispass:boolean,
}
const Component1 = <T,>(url:string,initialState:T):[T,boolean] =>{
const [loading,setLoading] = useState<boolean>(false);
const [data,setData] = useState<T>(initialState);
useEffect(()=>{
setLoading(true);
setTimeout(() => {
    axios.get(url)
    .then((res:any):void=>{
    setData(res.data);
    })
    .finally(()=>{
        setLoading(false);
    })  
}, 2000);

},[url])

    return [data,loading]
}

export default Component1;