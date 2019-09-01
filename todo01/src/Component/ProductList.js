import React,{useState, useEffect} from 'react'
 
export default function ProductList(props){
   console.log("function gets started------------------------------------")
   const [Cart , setCart] = useState([])
//    const [check1, setCheck1] = useState(false)
    const [items, setItems] = useState([
    
            {pno:1, name:'연필', price: 500},
            {pno:2, name:'지우개', price: 300},
            {pno:3, name:'노트', price: 1000},
            {pno:4, name:'맥북', price: 2500000},
    ])
    // useEffect(()=>{
    //     console.log("useEffect")
    //     const arr = items
    //     setItems(arr)
    // })
    
   console.log("Cart",Cart)
    console.log("items",items)
   const addCart = ({pno}) => {
    
    // console.log("pno",pno)
    const target = items.filter(obj=>obj.pno===pno)[0]
    // console.log("target",target)
    const index = items.indexOf(target)
    // console.log("index",index)
    const tempArr=items
    console.log("tempArr",tempArr)
    console.log(tempArr[index])

    Object.assign(tempArr[index],{checked:!target.checked})
    
    setItems(tempArr)

    console.log("tempArr",tempArr)
    console.log(Cart)
    const TempCart = Cart
    console.log(tempArr[index].checked)
    if(tempArr[index].checked){
        console.log("true/add cart")
        setCart([...Cart, tempArr[index]])
    }
    else{
    const targetCart = [...Cart].filter(obj=>obj.pno===pno)[0]
    console.log("targetCart",targetCart)
    const targetIndex = [...Cart].indexOf(targetCart)
    console.log("targetIndex",targetIndex)
    // console.log("else..false....index...",index)
    console.log("TempCart",TempCart)    
    TempCart.splice(targetIndex,1)
        console.log("TempCart", TempCart)
        setCart([...TempCart])
    }

   }
 
   const list = items.map( ({pno,name,price,checked})=>
 
   <li key={pno}> {name} - {price}
   <input type="checkbox" onChange={()=> addCart({pno})}></input>
   </li>
  
   )
 
   const cartList =
       Cart.map( ({pno,name,price,checked})=> <li key ={pno} > {name} - {price} </li> )
 
   return(
       <div>
           <ul>
               {list}
           </ul>
           <hr/>
           <h2>TOTAL</h2>
           <ul>
               {cartList}
           </ul>
 
       </div>
   )
}

