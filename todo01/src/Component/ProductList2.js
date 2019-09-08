import React,{useState, useEffect} from 'react'
 
export default function ProductList2(props){

    const [Cart , setCart] = useState([])
    const [items, setItems] = useState([
            {pno:1, name:'연필', price: 500, count:0},
            {pno:2, name:'지우개', price: 300, count : 0},
            {pno:3, name:'노트', price: 1000, count : 0},
            {pno:4, name:'맥북', price: 2500000, count : 0},
    ])

    useEffect(()=>{
        console.log("useeffect")
        console.log(items)
    },)

//    const addCart = ({pno}) => {

//     const target = items.filter(obj=>obj.pno===pno)[0]
//     const index = items.indexOf(target)
//     const tempArr = items

//     Object.assign(tempArr[index],{checked:!target.checked})
    
//     setItems(tempArr)

//     console.log(tempArr[index].checked)
//     if(tempArr[index].checked){
//         console.log("true/add cart")
//         setCart([...Cart, tempArr[index]])
//     }
//     else{
//     const TempCart = Cart
//     const targetCart = [...Cart].filter(obj=>obj.pno===pno)[0]
//     const targetIndex = [...Cart].indexOf(targetCart)
//     TempCart.splice(targetIndex,1)
//         setCart([...TempCart])
//     }

//    }
 
   const Counter = ({pno}) => {
    console.log("pno",{pno})

    const target = items.filter(obj=>obj.pno===pno)[0] 
    console.log(target)
    const index = items.indexOf(target)
    console.log(index)
    const tempArr = items

    const tempCount = target.count
    console.log("tempCount",tempCount)
    Object.assign(tempArr[index], {count: tempCount+1})
    console.log("tempArr",tempArr)

    setItems(tempArr)
    console.log(items)
}


const list = items.map( ({pno,name,price,count})=>

    <li key={pno}> {name} - {price}
        <input type='text' value={count} onChange={()=>{console.log("value changed")}}></input>
        <button onClick={()=>Counter({pno})}>+</button>
        <button>-</button>
    {/* <input type="checkbox" onChange={()=> addCart({pno})}></input> */}
    </li>
  )
  
  const cartList =
      Cart.map( ({pno,name,price,count})=> <li key ={pno} > {name} - {price}  </li> )
  
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

