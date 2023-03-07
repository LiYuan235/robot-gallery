import React,{useState,useEffect} from 'react'
import logo from './assets/images/logo.svg'
//将样式引入换成以模块的形式引入
// import './App.css';
import styles from './App.module.css'
import Robot from './components/Robots'
import ShoppingCart from './components/ShoppingCart'
import RobotDiscount from './components/RobotDiscount'

// interface Props{
  
// }
// interface State{
//   //资源来源于网络请求，返回数据类型不受控制，强行定义API数据类型，违反前后端分离的原则
//   robotGallery:any[];
// }
const App :React.FC=(props)=>{
  const [robotGallery,setRobotGallery]=useState<any>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [error,setError]=useState<string>();
  useEffect(()=>{
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>{setRobotGallery(data);
    setLoading(false);})
    .catch(error=>setError("没网"))
  },[])
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo}></img>
        <h1 >罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      {(!error||error!=='')&& <div>网站出错：{error}</div>}
      <ShoppingCart/>
     {!loading? (<div className={styles.robotList}>
        {robotGallery.map((r,index) => index%2===0?(
          <RobotDiscount id={r.id} name={r.name} email={r.email} key={r.id} />
        ):(
          <Robot id={r.id} name={r.name} email={r.email} key={r.id} />
        ))}
      </div>):(<h1>Loading....</h1>)}
    </div>
  )
  
}

export default App
