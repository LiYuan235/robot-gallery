import React, { useContext } from 'react'
import styles from './Robots.module.css'
import { appContext, appStateContext } from '../AppState'
import ShoppingCart from './ShoppingCart'
import { withAddToCart } from './addToCart'
interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart:(id,name)=>void;
}
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email ,addToCart}) => {
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`http://robohash.org/${id}`}></img>
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者名称：{value.username}</p>
      <button onClick={()=>addToCart}>加入购物车</button>
    </div>
  )
}
export default withAddToCart(RobotDiscount) 
//机器人图片网站：https:robohash.org/
