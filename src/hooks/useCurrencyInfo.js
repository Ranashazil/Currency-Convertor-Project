// How to design a custom hook 

import { useEffect, useState } from "react";

function useMe(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then ((res)=>  res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);  
    },[currency]) // jab b hm pkr kre ya koi b value change krenge to obviously chahenge ge k currency call ho to ye ek dependencies ha k ye call ho to call krne k liye dependencies ma usko likh denge 
    console.log(data);
    return data
}
export default useMe