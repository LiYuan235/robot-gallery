import React,{useState} from 'react'
interface AppStateValue{
    username:string,
    shoppingCart:{item:{
        id:number,
        name:string
    }[]}
}
const defaultContextValue:AppStateValue={
    username:'alaikesi',
    shoppingCart:{
        item:[],
    }
  }
interface Props{
}
interface props{
    children?:React.ReactNode;
}
export const appContext=React.createContext<AppStateValue>(defaultContextValue);
export const appStateContext=React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined);
export const AppStateProvider:React.FC<Props>=(props:props)=>{
    const [state,setState]=useState(defaultContextValue);
    return <appContext.Provider value={state}>
        <appStateContext.Provider value={setState}>
           {props.children}
        </appStateContext.Provider>
        </appContext.Provider>
}