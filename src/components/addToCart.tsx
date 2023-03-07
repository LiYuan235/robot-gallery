import React,{useContext} from "react"
import { appStateContext } from "../AppState"
import {RobotProps} from "./Robots"

export const withAddToCart=(ChildComponent:React.ComponentType<RobotProps>)=>{
    return (props)=>{
        const setState = useContext(appStateContext)
        const addToCart = (id,name) => {
          console.log("开始点击了")
          if (setState) {
            setState((prestate) => {
              console.log(prestate)
              return {
                username:prestate.username,
                shoppingCart: {
                  item: [...prestate.shoppingCart.item, { id, name }],
                },
              }
            })
          }
        }    
        return <ChildComponent {...props}/>
    }
}