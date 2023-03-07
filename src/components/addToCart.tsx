import React,{useContext} from "react"
import { appStateContext } from "../AppState"
import {RobotProps} from "./Robots"

export const withAddToCart=(ChildComponent:React.ComponentType<RobotProps>)=>{
    return (props)=>{
        const setState = useContext(appStateContext)
        const addToCart = (id,name) => {
          if (setState) {
            setState((prestate) => {
              return {
                username:prestate.username,
                shoppingCart: {
                  item: [...prestate.shoppingCart.item, { id, name }],
                },
              }
            })
          }
        }    
        return <ChildComponent {...props} addToCart={addToCart}/>
    }
}